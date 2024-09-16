import { Expose, Type } from 'class-transformer';
import { IacContributorDto } from './iac-contributor.dto';

export class IacManagerSyncInfoDto {
  @Expose()
  executionTimeInMs: number;

  @Expose()
  numberOfFiles: number;

  @Type(() => IacContributorDto)
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
