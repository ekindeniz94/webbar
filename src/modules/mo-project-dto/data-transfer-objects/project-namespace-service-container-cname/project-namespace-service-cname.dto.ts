import { Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { TransformToBoolean } from '@mogenius/js-utils';
import { IsBoolean } from 'class-validator';

export class ProjectNamespaceServiceCnameDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  @Expose()
  cName: string;

  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
