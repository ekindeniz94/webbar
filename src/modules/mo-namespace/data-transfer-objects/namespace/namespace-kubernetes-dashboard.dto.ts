import {Expose, Type} from 'class-transformer';

export class NamespaceKubernetesDashboardDto {
  // from prometheus
  @Type(() => Number)
  @Expose()
  allocatedTrafficMB: number;
  @Expose()
  usedTrafficMB: number;

  @Type(() => Number)
  @Expose()
  allocatedCpuCores: number;

  @Type(() => Number)
  @Expose()
  usedCpuCores: number;

  @Type(() => Number)
  @Expose()
  allocatedMemoryMB: number;

  @Type(() => Number)
  @Expose()
  usedMemoryMB: number;

  @Type(() => Number)
  @Expose()
  allocatedStorageMB: number;

  @Type(() => Number)
  @Expose()
  usedStorageMB: number;
}
