import { Expose } from 'class-transformer';

export class ProjectNamespaceStatsDto {
  @Expose()
  cpuAllocatedCores: number;

  @Expose()
  ramAllocatedBytes: number;

  @Expose()
  storageUsageBytes: number;

  @Expose()
  trafficConsumptionBytes: number;

  @Expose()
  temporaryStorageUsageBytes: number;
}
