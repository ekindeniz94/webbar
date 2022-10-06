import { Expose, Transform } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';

export class CpuStatsDto extends StatsDto {
  @Transform(() => PodStatsUnitEnum.CORES)
  @Expose()
  unit: PodStatsUnitEnum.CORES;
}
