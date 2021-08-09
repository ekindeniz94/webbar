import { Expose, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';
import { TimeSeriesDto } from './time-series.dto';

export class StorageStatsDto extends StatsDto {
  @Expose()
  unit: PodStatsUnitEnum.MB;

  @Type(() => TimeSeriesDto)
  @Expose()
  timeseries: TimeSeriesDto[];
}
