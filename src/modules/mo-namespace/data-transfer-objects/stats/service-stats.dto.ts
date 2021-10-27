import { Expose, Type } from 'class-transformer';
import { CpuStatsDto } from './cpu-stats.dto';
import { MemoryStatsDto } from './memory-stats.dto';
import { StatsEntryDto } from './stats-entry.dto';
import { StorageStatsDto } from './storage-stats.dto';
import { TrafficStatsDto } from './traffic-stats.dto';

export class ServiceStatsDto {
  @Expose()
  name: string;

  @Expose()
  id: string;

  @Expose()
  timestamp: Date;

  @Type(() => CpuStatsDto)
  @Expose()
  cpu: CpuStatsDto;

  @Type(() => MemoryStatsDto)
  @Expose()
  memory: MemoryStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  storage?: StorageStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  ephemeralStorage?: StorageStatsDto;

  @Type(() => TrafficStatsDto)
  @Expose()
  traffic?: TrafficStatsDto;

  @Type(() => StatsEntryDto)
  @Expose()
  entries?: StatsEntryDto[];
}
