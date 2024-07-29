import { BaseEntityDto } from '@mogenius/database-dto';
import { Expose, Type } from 'class-transformer';
import moment from 'moment';
import { ProjectCiCdNamespaceServiceContainerDto } from './project-cicd-namespace-service-container.dto';
import { K8sBuildStateEnum } from '../../../mo-kubernetes';

export class ProjectCiCdNamespaceServiceDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Type(() => ProjectCiCdNamespaceServiceContainerDto)
  @Expose()
  containers: ProjectCiCdNamespaceServiceContainerDto[]; // Always

  public latestBuildState(): K8sBuildStateEnum | undefined {
    const hierarchy = [
      K8sBuildStateEnum.STARTED,
      K8sBuildStateEnum.FAILED,
      K8sBuildStateEnum.PENDING,
      K8sBuildStateEnum.SUCCEEDED
    ];

    return this.containers.reduce((acc: K8sBuildStateEnum | undefined, container) => {
      if (!container.latestBuildState) {
        return acc;
      }
      if (!acc || hierarchy.indexOf(acc) > hierarchy.indexOf(container.latestBuildState)) {
        return container.latestBuildState;
      } else {
        return acc;
      }
    }, undefined);
  }

  public latestBuildTime(): Date | undefined {
    return this.containers.reduce((acc: Date | undefined, container) => {
      if (!container.latestBuildTime) {
        return acc;
      }
      if (!acc || moment(container.latestBuildTime).isAfter(moment(acc))) {
        return container.latestBuildTime;
      } else {
        return acc;
      }
    }, undefined);
  }
}
