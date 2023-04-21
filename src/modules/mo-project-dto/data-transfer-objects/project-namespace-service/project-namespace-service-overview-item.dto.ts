import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';

export class ProjectNamespaceServiceOverviewItemDto {
  @Expose()
  id: string;
  @Expose()
  type: string; // Enum
  @Expose()
  updatedAt: Date;
  @Expose()
  runningInstanceCount: number;
  @Expose()
  state: string; // Enum ON/OFF;
  @Expose()
  status: string; // Enum ERROR/BUILDING...
  @Expose()
  runningSince: Date;

  @Expose()
  cpuUsagePercentage: number;
  @Expose()
  ramUsagePercentage: number;
  @Expose()
  storageUsageBytes: number;
  @Expose()
  trafficConsumptionBytes: number;
  @Expose()
  temporaryStorageUsageBytes: number;

  app: ProjectNamespaceServiceAppDashboardDto;
}
