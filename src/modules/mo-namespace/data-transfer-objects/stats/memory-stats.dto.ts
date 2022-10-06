import { Expose, Transform, Type } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';

export class MemoryStatsDto extends StatsDto {
  @Transform(() => PodStatsUnitEnum.MB)
  @Expose()
  unit: PodStatsUnitEnum.MB;
}