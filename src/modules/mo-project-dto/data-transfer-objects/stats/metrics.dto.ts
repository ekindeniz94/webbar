import { isNumber } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class MetricsResponseDto {
  @Expose()
  namespace: string;

  @Expose()
  name: string;

  @Expose()
  kind: string;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpu: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpuLimit: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpuAverageUtilization: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  memory: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  memoryLimit: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  memoryAverageUtilization: number;

  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  windowInMs: number;

  @Expose()
  @Transform(({ value }) => (moment(value).isValid() ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;
}
