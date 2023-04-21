import { Expose } from 'class-transformer';
import { ProjectNamespaceDashboardStatsDto } from '../project-namespace/project-namespace-dashboard-stats.dto';

export class ProjectDashboardStatsResponseDto {
  @Expose()
  totalCpuUsageCores: number;
  @Expose()
  totalRamUsageBytes: number;
  @Expose()
  totalStorageUsageBytes: number;
  @Expose()
  totalTrafficUsageBytes: number;

  @Expose()
  totalCpuAllocatedCores: number;
  @Expose()
  totalRamAllocatedBytes: number;
  @Expose()
  totalStorageAllocatedBytes: number;
  @Expose()
  totalTrafficAllocatedBytes: number;

  @Expose()
  namespaces: ProjectNamespaceDashboardStatsDto[];
}
