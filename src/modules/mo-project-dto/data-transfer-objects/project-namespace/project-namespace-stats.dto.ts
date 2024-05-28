import { Expose, Type } from 'class-transformer';
import { CpuDto, EphemeralStorageDto, MemoryDto, StorageDto, TrafficDto } from '../stats';
import { OriginTrafficDto } from '../traffic';

export class ProjectNamespaceStatsDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Type(() => CpuDto)
  @Expose()
  cpu: CpuDto;

  @Type(() => MemoryDto)
  @Expose()
  memory: MemoryDto;

  @Type(() => EphemeralStorageDto)
  @Expose()
  ephemeralStorage: EphemeralStorageDto;

  @Type(() => StorageDto)
  @Expose()
  storage: StorageDto;

  @Type(() => TrafficDto)
  @Expose()
  traffic: TrafficDto;
}
