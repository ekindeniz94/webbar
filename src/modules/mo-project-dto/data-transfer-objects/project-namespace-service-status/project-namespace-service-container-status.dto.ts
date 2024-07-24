import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'class-validator';
import moment from 'moment';

export class ProjectNamespaceServiceContainerStatusDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  restartCount: number;
}
