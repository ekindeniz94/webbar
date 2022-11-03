import { Expose, Transform, Type } from 'class-transformer';
import { BuildStateEnum } from '../../../mo-notification';
import moment from 'moment/moment';

export class NamespaceServiceBuildDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  @Expose()
  buildId: string;

  @Expose()
  buildState?: BuildStateEnum;

  @Expose()
  vulnerabilitiesData: string;
}
