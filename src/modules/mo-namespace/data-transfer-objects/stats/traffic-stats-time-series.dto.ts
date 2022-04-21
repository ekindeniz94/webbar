import { Expose, Transform, Type } from 'class-transformer';
import { TimeSeriesDto } from './time-series.dto';
import { isArray } from 'class-validator';

export class TrafficStatsTimeSeriesDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => TimeSeriesDto)
  @Expose()
  receive: TimeSeriesDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => TimeSeriesDto)
  @Expose()
  transmit: TimeSeriesDto[];
}
