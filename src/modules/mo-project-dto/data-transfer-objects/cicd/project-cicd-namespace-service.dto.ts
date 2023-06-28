import { Expose } from 'class-transformer';
import { ProjectCiCdNamespaceServiceBuildDto } from './project-cicd-namespace-service-build.dto';

export class ProjectCiCdNamespaceServiceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  latestBuild: ProjectCiCdNamespaceServiceBuildDto;
}
