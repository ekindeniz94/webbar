import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceDashboardDto } from '../project-namespace-service/project-namespace-service-dashboard.dto';

export class ProjectNamespaceDashboardResponseDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  services: ProjectNamespaceServiceDashboardDto[];
}
