import { Expose, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { TimeSeriesDto } from './time-series.dto';
import { PodStatsUnitEnum } from '../../enums';

export class CpuStatsDto extends StatsDto {
  @Expose()
  unit: PodStatsUnitEnum.CORES;

  @Type(() => TimeSeriesDto)
  @Expose()
  timeseries: TimeSeriesDto[];
}
