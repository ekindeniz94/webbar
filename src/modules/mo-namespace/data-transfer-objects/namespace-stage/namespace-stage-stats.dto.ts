import { Expose, Type } from 'class-transformer';
import { CpuStatsDto, MemoryStatsDto, StorageStatsDto } from '../stats';
import { NamespaceStageOriginTrafficDto } from './namespace-stage-origin-traffic.dto';

export class NamespaceStageStatsDto {
  @Expose()
  id: string;

  @Type(() => CpuStatsDto)
  @Expose()
  cpu: CpuStatsDto;

  @Type(() => MemoryStatsDto)
  @Expose()
  memory: MemoryStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  ephemeralStorage: StorageStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  storage: StorageStatsDto;

  @Type(() => NamespaceStageOriginTrafficDto)
  @Expose()
  traffic: NamespaceStageOriginTrafficDto;
}
