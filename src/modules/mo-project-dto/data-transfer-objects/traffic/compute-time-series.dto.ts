import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { isNumber } from 'class-validator';

export class ComputeTimeSeriesDto {
  @Expose()
  namespace: string;

  @Expose()
  containerName: string;

  @Expose()
  podName: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  cpu: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  cpuLimit: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  memory: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  memoryLimit: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  ephemeralStorage: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  ephemeralStorageLimit: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;
}
