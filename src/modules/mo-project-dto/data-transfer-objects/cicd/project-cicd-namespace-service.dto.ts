import { Expose, Type } from 'class-transformer';
import { ProjectCiCdNamespaceServiceBuildDto } from './project-cicd-namespace-service-build.dto';
import { ProjectNamespaceDisplayNameDto } from '../project-namespace';

export class ProjectCiCdNamespaceServiceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Type(() => ProjectNamespaceDisplayNameDto)
  @Expose()
  projectNamespace: ProjectNamespaceDisplayNameDto;

  @Type(() => ProjectCiCdNamespaceServiceBuildDto)
  @Expose()
  latestBuild: ProjectCiCdNamespaceServiceBuildDto;
}
