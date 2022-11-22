import { Expose, Transform, Type } from 'class-transformer';
import { TrafficTimeSeriesDto } from './traffic-time-series.dto';
import { isArray } from 'class-validator';
import { TrafficTimeSeriesTotalDto } from './traffic-time-series-total.dto';

export class TrafficTimeSeriesResponseDto {
  @Type(() => TrafficTimeSeriesDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  results: TrafficTimeSeriesDto[];

  @Type(() => TrafficTimeSeriesTotalDto)
  @Expose()
  total: TrafficTimeSeriesTotalDto;
}
