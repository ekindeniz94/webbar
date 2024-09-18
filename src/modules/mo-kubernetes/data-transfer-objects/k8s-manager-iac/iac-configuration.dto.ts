import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class IacConfigurationDto {
  @Expose()
  repoUrl: string;

  @Expose()
  repoPat: string;

  @Expose()
  repoBranch: string;

  @Expose()
  syncFrequencyInSec: number;

  @Expose()
  allowPush: boolean;

  @Expose()
  allowPull: boolean;

  @Expose()
  syncWorkloads: string[];

  @Expose()
  showDiffInLog: boolean;

  @Expose()
  ignoredNamespaces: string[];

  @Expose()
  logChanges: boolean;
}
