import { Expose, Transform, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { TimeSeriesDto } from './time-series.dto';
import { PodStatsUnitEnum } from '../../enums';
import { isArray } from 'class-validator';

export class MemoryStatsDto extends StatsDto {
  @Expose()
  unit: PodStatsUnitEnum.MB;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => TimeSeriesDto)
  @Expose()
  timeseries: TimeSeriesDto[];
}