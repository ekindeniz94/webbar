import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceDashboardBuildJobDto } from '../project-namespace-service-build-job/project-namespace-service-dashboard-build-job.dto';

export class ProjectNamespaceServiceDashboardCiCDBuildDto {
  @Expose()
  id: string;
  @Expose()
  createdAt: Date;
  @Expose()
  jobs: ProjectNamespaceServiceDashboardBuildJobDto[];
}
