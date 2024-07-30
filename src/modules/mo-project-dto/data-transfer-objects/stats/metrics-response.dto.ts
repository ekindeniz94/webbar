import { isNumber } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { PodMetricsDto } from './pod-metrics.dto';

export class MetricsResponseDto {
  @Expose()
  namespace: string;

  @Expose()
  name: string;

  @Expose()
  kind: string;

  @Expose()
  @Type(() => PodMetricsDto)
  podsMetrics: PodMetricsDto[];

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpuAverageUtilization: number;

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
