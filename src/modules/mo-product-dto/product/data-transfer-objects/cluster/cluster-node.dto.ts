import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

export class ClusterNodeDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  osImage: string;

  @Expose()
  osType: string;

  @Expose()
  architecture: string;

  @Type(() => Number)
  @Expose()
  cpuInCores: number;

  @Type(() => Number)
  @Expose()
  CpuInCoresUtilized: number;

  @Type(() => Number)
  @Expose()
  ephemeralInBytes: number;

  @Expose()
  kubletVersion: string;

  @Expose()
  maschineId: string;

  @Type(() => Number)
  @Expose()
  maxPods: number;

  @Type(() => Number)
  @Expose()
  memoryInBytes: number;

  @Type(() => Number)
  @Expose()
  MemoryInBytesUtilized: number;
}
