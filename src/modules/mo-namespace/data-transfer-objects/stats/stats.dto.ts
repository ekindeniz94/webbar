import { Expose } from 'class-transformer';
import { PodStatsUnitEnum } from '../../enums';

export class StatsDto {
  @Expose()
  unit: PodStatsUnitEnum;

  @Expose()
  current: number;

  @Expose()
  limit: number;

  @Expose()
  percentage: number;
}
