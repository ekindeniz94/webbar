import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app/project-namespace-service-app-dashboard.dto';
import { ProjectNamespaceServiceDashboardCiCDBuildDto } from '../project-namespace-service-build/project-namespace-service-dashboard-ci-cd-build.dto';

export class ProjectNamespaceServiceDashboardCiCDResponseDto {
  id: string;
  displayName: string;
  latestBuild: ProjectNamespaceServiceDashboardCiCDBuildDto;
}
