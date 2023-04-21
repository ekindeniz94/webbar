import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app/project-namespace-service-app-dashboard.dto';

export class ProjectNamespaceServiceDashboardDto {
  @Expose()
  id: string;

  @Expose()
  type: string; // Enum

  @Expose()
  updatedAt: Date;

  @Expose()
  displayName: string;

  @Expose()
  state: string; // Enum ### Not the build state

  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;
}
