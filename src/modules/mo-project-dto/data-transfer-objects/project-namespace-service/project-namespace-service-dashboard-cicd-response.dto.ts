import { ProjectNamespaceServiceDashboardCiCDBuildDto } from '../project-namespace-service-build/project-namespace-service-dashboard-ci-cd-build.dto';

export class ProjectNamespaceServiceDashboardCiCDResponseDto {
  id: string;
  displayName: string;
  latestBuild: ProjectNamespaceServiceDashboardCiCDBuildDto;
}
