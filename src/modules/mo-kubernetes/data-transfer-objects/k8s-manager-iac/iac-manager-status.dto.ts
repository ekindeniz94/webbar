import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { IacManagerSyncInfoDto } from './iac-manager-sync-info.dto';
import { IacGitActionStatusDto } from './iac-git-action-status.dto';
import { IacManagerResourceStateDto } from './iac-manager-resource-state.dto';

export class IacManagerStatusDto {
  @Expose()
  syncInfo: IacManagerSyncInfoDto;

  @Type(() => IacGitActionStatusDto)
  @Expose()
  commitHistory: IacGitActionStatusDto[];

  @Type(() => IacGitActionStatusDto)
  @Expose()
  lastSuccessfullyAppliedCommit: IacGitActionStatusDto;

  @Expose()
  iacConfiguration: any;

  @Transform(({ value }) => {
    const results: Record<string, IacManagerResourceStateDto> = {};
    for (const key in value) {
      results[key] = plainToInstance(IacManagerResourceStateDto, value[key]);
    }
    return results;
  })
  @Expose()
  resourceStates: Record<string, IacManagerResourceStateDto>;
}
