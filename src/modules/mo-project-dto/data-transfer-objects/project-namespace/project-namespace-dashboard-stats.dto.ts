import { Expose } from 'class-transformer';

export class ProjectNamespaceDashboardStatsDto {
  @Expose()
  id: string;
  @Expose()
  displayName: string;
  @Expose()
  cpuUsageCores: number;
  @Expose()
  ramUsageBytes: number;
  @Expose()
  storageUsageBytes: number;
  @Expose()
  trafficUsageBytes: number;
}
