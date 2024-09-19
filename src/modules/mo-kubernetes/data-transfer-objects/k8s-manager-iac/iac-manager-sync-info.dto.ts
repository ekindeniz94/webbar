import { Expose, Transform } from 'class-transformer';
import { IacContributorDto } from './iac-contributor.dto';
import _ from 'lodash';
import { MoUtils } from '@mogenius/js-utils';
import { isArray } from 'class-validator';

export class IacManagerSyncInfoDto {
  @Expose()
  executionTimeInMs: number;

  @Expose()
  numberOfFiles: number;

  @Transform(({ value }: { value: IacContributorDto[] }) => {
    value = _.orderBy(MoUtils.transformToDtoList(IacContributorDto, value), ['lastActivityTime'], ['desc']);
    return value;
  })
  @Expose()
  contributors: IacContributorDto[];

  @Expose()
  recentlyAddedOrUpdatedFiles: string[];

  @Expose()
  recentlyDeletedFiles: string[];

  @Expose()
  repoError: string;

  @Expose()
  remoteError: string;

  @Expose()
  pullError: string;

  @Expose()
  pushError: string;

  @Expose()
  syncError: string;

  /*********************************************************************************************************************
   * The following properties are not present in the original source code but are used in the application for
   * additional functionality. They are added here for reference.
   * ********************************************************************************************************************/

  @Transform(({ obj }: { obj: IacManagerSyncInfoDto }) => {
    return isArray(obj?.contributors) ? obj.contributors.length : 0;
  })
  @Expose()
  contributorsCount: number;

  @Transform(({ obj }: { obj: IacManagerSyncInfoDto }) => {
    return isArray(obj?.recentlyAddedOrUpdatedFiles) ? obj.recentlyAddedOrUpdatedFiles.length : 0;
  })
  @Expose()
  recentlyAddedOrUpdatedFilesCount: number;

  @Transform(({ obj }: { obj: IacManagerSyncInfoDto }) => {
    return isArray(obj?.recentlyDeletedFiles) ? obj.recentlyDeletedFiles.length : 0;
  })
  @Expose()
  recentlyDeletedFilesCount: number;
}
