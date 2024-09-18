import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class IacCommitRevisionDto {
  @Expose()
  hash: string;

  @Expose()
  author: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  date: Date;

  @Expose()
  diff: string;
}
