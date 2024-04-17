import { Expose } from 'class-transformer';
import { ContainerTypeEnum } from '../../enums';
import { ProjectCiCdNamespaceServiceContainerBuildDto } from './project-cicd-namespace-service-container-build.dto';

export class ProjectCiCdNamespaceServiceContainerDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  type: ContainerTypeEnum;

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Expose()
  gitRepositoryUrl: string;

  @Expose()
  latestBuild: ProjectCiCdNamespaceServiceContainerBuildDto;

  @Expose()
  builds: ProjectCiCdNamespaceServiceContainerBuildDto[] | null;
}
