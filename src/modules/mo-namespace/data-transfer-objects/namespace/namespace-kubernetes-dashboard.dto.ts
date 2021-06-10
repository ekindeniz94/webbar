import { Expose } from 'class-transformer';

export class NamespaceKubernetesDashboardDto {
  // from prometheus
  @Expose()
  allocatedTrafficMB: number;
  @Expose()
  usedTrafficMB: number;

  @Expose()
  allocatedCpuCores: number;
  @Expose()
  usedCpuCores: number;

  @Expose()
  allocatedMemoryMB: number;
  @Expose()
  usedMemoryMB: number;

  @Expose()
  allocatedStorageMB: number;
  @Expose()
  usedStorageMB: number;
}
