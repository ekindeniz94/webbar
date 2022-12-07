import { Expose, Transform, Type } from 'class-transformer';
import { TrafficTimeSeriesDto } from './traffic-time-series.dto';
import { isArray } from 'class-validator';

export class TrafficTimeSeriesResponseDto {
  @Type(() => TrafficTimeSeriesDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  results: TrafficTimeSeriesDto[];
}
