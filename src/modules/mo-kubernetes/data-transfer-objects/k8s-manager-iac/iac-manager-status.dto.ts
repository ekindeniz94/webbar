import { Expose, Transform, Type } from 'class-transformer';
import { IacManagerSyncInfoDto } from './iac-manager-sync-info.dto';
import { IacGitActionStatusDto } from './iac-git-action-status.dto';
import { IacManagerResourceStateDto } from './iac-manager-resource-state.dto';
import { IacResourceStatesItemDto } from './iac-resource-states-item.dto';
import { MoUtils, TransformToBoolean } from '@mogenius/js-utils';
import _ from 'lodash';
import { isNotEmpty } from 'class-validator';
import { IacConfigurationDto } from './iac-configuration.dto';
import moment from 'moment';

export class IacManagerStatusDto {
  @Expose()
  syncInfo: IacManagerSyncInfoDto;

  @Expose()
  repoPulse: Record<string, number>;

  @Type(() => IacGitActionStatusDto)
  @Expose()
  lastSuccessfullyAppliedCommit: IacGitActionStatusDto;

  @Type(() => IacConfigurationDto)
  @Expose()
  iacConfiguration: IacConfigurationDto;

  @Transform(({ value, obj }: { value: Record<string, IacManagerResourceStateDto>; obj: IacManagerStatusDto }) => {
    const results: Record<string, IacManagerResourceStateDto> = {};
    obj.resourceStatesArray = [];
    obj.errorCount = 0;
    // obj.errorStates = [];
    obj.synced = true;
    for (const key in value) {
      const resourceState = MoUtils.transformToDto(IacManagerResourceStateDto, value[key]);
      results[key] = resourceState;

      obj.resourceStatesArray.push(
        MoUtils.transformToDto(IacResourceStatesItemDto, {
          fileName: key,
          lastUpdate: resourceState.lastUpdate,
          data: resourceState
        })
      );

      if (resourceState.state !== 'Synced' && obj.synced) {
        obj.synced = false;
      }

      if (resourceState.error && isNotEmpty(resourceState.error)) {
        // obj.errorStates.push(resourceState);
        obj.errorCount++;
      }
    }

    obj.resourceStatesArray = _.orderBy(obj.resourceStatesArray, ['lastUpdate'], ['desc']);
    // obj.errorStates = _.orderBy(obj.errorStates, ['lastUpdate'], ['desc']);
    return results;
  })
  @Expose()
  resourceStates: Record<string, IacManagerResourceStateDto>;

  /*********************************************************************************************************************
   * The following properties are not present in the original source code but are used in the application for
   * additional functionality. They are added here for reference.
   * ********************************************************************************************************************/

  @Expose()
  errorCount: number;

  // @Expose()
  // errorStates: IacManagerResourceStateDto[];

  @Expose()
  resourceStatesArray: IacResourceStatesItemDto[];

  @TransformToBoolean(false)
  @Expose()
  synced: boolean;

  @Transform(({ obj }: { obj: IacManagerStatusDto }) => {
    if (!obj.lastSuccessfullyAppliedCommit) {
      return new Date();
    }
    return new Date(
      moment(obj.lastSuccessfullyAppliedCommit?.lastExecution).toDate().getTime() + obj.syncInfo.executionTimeInMs
    );
  })
  @Expose()
  get nextExecutionDate(): Date {
    return new Date((this.lastSuccessfullyAppliedCommit?.lastExecution).getTime() + this.syncInfo?.executionTimeInMs);
  }

  @Expose()
  get lastUpdateFromNow(): string {
    const nextExecutionDate = moment(this.nextExecutionDate);
    const now = moment();
    const duration = moment.duration(nextExecutionDate.diff(now));
    return duration.toISOString();
  }

  @Expose()
  getNextExecution(): string {
    const now = new Date();

    if (!this.lastSuccessfullyAppliedCommit) {
      return '0h 0m 0s';
    }

    let timeSinceLastExecution = now.getTime() - this.lastSuccessfullyAppliedCommit?.lastExecution?.getTime();

    const syncFrequencyInMs = this.iacConfiguration.syncFrequencyInSec * 1000;
    if (timeSinceLastExecution >= syncFrequencyInMs) {
      const cycles = Math.floor(timeSinceLastExecution / syncFrequencyInMs);

      this.lastSuccessfullyAppliedCommit.lastExecution = new Date(
        this.lastSuccessfullyAppliedCommit?.lastExecution?.getTime() + cycles * syncFrequencyInMs
      );

      timeSinceLastExecution = now.getTime() - this.lastSuccessfullyAppliedCommit?.lastExecution?.getTime();
    }

    const timeUntilNextExecution = syncFrequencyInMs - timeSinceLastExecution;

    const hours = Math.floor((timeUntilNextExecution / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeUntilNextExecution / (1000 * 60)) % 60);
    const seconds = Math.floor((timeUntilNextExecution / 1000) % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
