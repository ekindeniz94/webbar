import { Expose, Type } from 'class-transformer';
import { TrafficStatsDto } from './traffic-stats.dto';
import { StorageStatsDto } from './storage-stats.dto';
import { MemoryStatsDto } from './memory-stats.dto';
import { CpuStatsDto } from './cpu-stats.dto';

export class ServiceStatsDto {
  @Type(() => CpuStatsDto)
  @Expose()
  cpu: CpuStatsDto;

  @Type(() => MemoryStatsDto)
  @Expose()
  memory: MemoryStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  storage: StorageStatsDto;

  @Type(() => TrafficStatsDto)
  @Expose()
  traffic: TrafficStatsDto;
}
