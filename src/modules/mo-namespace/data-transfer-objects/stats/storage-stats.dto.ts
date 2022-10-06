import { Expose, Transform } from 'class-transformer';
import { StatsDto } from './stats.dto';
import { PodStatsUnitEnum } from '../../enums';

export class StorageStatsDto extends StatsDto {
  @Transform(() => PodStatsUnitEnum.MB)
  @Expose()
  unit: PodStatsUnitEnum.MB;
}
