import { Expose, Transform } from 'class-transformer';
import moment from 'moment/moment';

export class IacGitActionStatusDto {
  @Expose()
  commitMsg: string;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitHash: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  commitDate: Date;

  @Expose()
  diff: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  lastExecution: Date;
}
