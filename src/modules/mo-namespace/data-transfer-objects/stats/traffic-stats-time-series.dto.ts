import { Expose, Type } from 'class-transformer';
import { TimeSeriesDto } from './time-series.dto';

export class TrafficStatsTimeSeriesDto {
  @Type(() => TimeSeriesDto)
  @Expose()
  receive: TimeSeriesDto[];

  @Type(() => TimeSeriesDto)
  @Expose()
  transmit: TimeSeriesDto[];
}
