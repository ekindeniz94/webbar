import { Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { MoUtils } from '@mo/js-utils';
import { IsBoolean, isBoolean } from 'class-validator';

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

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
