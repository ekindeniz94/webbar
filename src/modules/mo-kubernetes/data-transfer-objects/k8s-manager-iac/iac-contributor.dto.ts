import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class IacContributorDto {
  @Expose()
  name: string;

  @Expose()
  email: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  lastActivityTime: Date;
}
