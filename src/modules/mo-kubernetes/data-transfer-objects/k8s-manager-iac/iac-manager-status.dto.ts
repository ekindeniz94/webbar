import { Expose, Transform, Type } from 'class-transformer';
import { IacManagerSyncInfoDto } from './iac-manager-sync-info.dto';
import { IacGitActionStatusDto } from './iac-git-action-status.dto';
import { IacManagerResourceStateDto } from './iac-manager-resource-state.dto';
import { IacResourceStatesItemDto } from './iac-resource-states-item.dto';
import { MoUtils, TransformToBoolean } from '@mogenius/js-utils';
import _ from 'lodash';
import { isNotEmpty } from 'class-validator';
import { IacConfigurationDto } from './iac-configuration.dto';

export class IacManagerStatusDto {
  @Expose()
  syncInfo: IacManagerSyncInfoDto;

  @Type(() => IacGitActionStatusDto)
  @Expose()
  commitHistory: IacGitActionStatusDto[];

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
}
