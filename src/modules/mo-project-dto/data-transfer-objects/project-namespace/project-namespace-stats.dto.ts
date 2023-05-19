import { Expose, Type } from 'class-transformer';
import { CpuDto, EphemeralStorageDto, MemoryDto, StorageDto } from '../stats';
import { OriginTrafficDto } from '../traffic';

export class ProjectNamespaceStatsDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

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

  @Type(() => OriginTrafficDto)
  @Expose()
  traffic: OriginTrafficDto;
}
