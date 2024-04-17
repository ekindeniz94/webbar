import { Expose, Type } from 'class-transformer';
import { ProjectNamespaceDisplayNameDto } from '../project-namespace';
import { ProjectDisplayNameDto } from '../project';
import { ProjectCiCdNamespaceServiceContainerDto } from './project-cicd-namespace-service-container.dto';
import { BuildStateEnum } from 'dist/modules';
import moment from 'moment';

export class ProjectCiCdNamespaceServiceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Type(() => ProjectDisplayNameDto)
  @Expose()
  project: ProjectDisplayNameDto;

  @Type(() => ProjectNamespaceDisplayNameDto)
  @Expose()
  projectNamespace: ProjectNamespaceDisplayNameDto;

  @Expose()
  containers: ProjectCiCdNamespaceServiceContainerDto[]; // Always

  @Expose()
  public latestBuildState(): BuildStateEnum | undefined {
    const hierarchy = [BuildStateEnum.STARTED, BuildStateEnum.FAILED, BuildStateEnum.FINISHED, BuildStateEnum.PENDING];

    return this.containers.reduce((acc: BuildStateEnum | undefined, container) => {
      if (!acc || hierarchy.indexOf(acc) < hierarchy.indexOf(container.latestBuild.buildState)) {
        return container.latestBuild.buildState;
      } else {
        return acc;
      }
    }, undefined);
  }

  @Expose()
  public latestBuildTime(): Date | undefined {
    return this.containers.reduce((acc: Date | undefined, container) => {
      if (!acc || moment(container.latestBuild.createdAt).isAfter(moment(acc))) {
        return container.latestBuild.createdAt;
      } else {
        return acc;
      }
    }, undefined);
  }
}
