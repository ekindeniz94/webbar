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
}
