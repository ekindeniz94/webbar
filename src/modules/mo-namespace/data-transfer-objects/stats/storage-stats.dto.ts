import { Expose, Transform, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';
import { TimeSeriesDto } from './time-series.dto';
import { isArray } from 'class-validator';

export class StorageStatsDto extends StatsDto {
  @Expose()
  unit: PodStatsUnitEnum.MB;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => TimeSeriesDto)
  @Expose()
  timeseries: TimeSeriesDto[];
}
