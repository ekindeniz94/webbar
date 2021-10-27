import { Expose, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';
import { TrafficStatsTimeSeriesDto } from './traffic-stats-time-series.dto';

export class TrafficStatsDto extends StatsDto {
  @Expose()
  unit: PodStatsUnitEnum.MB;

  @Type(() => TrafficStatsTimeSeriesDto)
  @Expose()
  timeseries: TrafficStatsTimeSeriesDto;
}
