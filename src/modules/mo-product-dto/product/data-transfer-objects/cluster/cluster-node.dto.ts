import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';

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
  cpuInCoresUtilized: number;

  @Type(() => Number)
  @Expose()
  cpuInCoresRequested: number;

  @Type(() => Number)
  @Expose()
  cpuInCoresLimited: number;

  @Type(() => Number)
  @Expose()
  ephemeralInBytes: number;

  @Expose()
  kubletVersion: string;

  @Expose()
  maschineId: string;

  @Expose()
  osKernelVersion: string;

  @Type(() => Number)
  @Expose()
  maxPods: number;

  @Type(() => Number)
  @Expose()
  totalPods: number;

  @Type(() => Number)
  @Expose()
  memoryInBytes: number;

  @Type(() => Number)
  @Expose()
  memoryInBytesRequested: number;

  @Type(() => Number)
  @Expose()
  memoryInBytesLimited: number;

  @Type(() => Number)
  @Expose()
  memoryInBytesUtilized: number;
}
