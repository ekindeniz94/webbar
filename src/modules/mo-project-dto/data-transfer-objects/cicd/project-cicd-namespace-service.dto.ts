import { Expose } from 'class-transformer';
import moment from 'moment';
import { BuildStateEnum } from '../../../mo-product-dto/product/enums/k8s-manager/build-state.enum';
import { ProjectCiCdNamespaceServiceContainerDto } from './project-cicd-namespace-service-container.dto';

export class ProjectCiCdNamespaceServiceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  containers: ProjectCiCdNamespaceServiceContainerDto[]; // Always

  @Expose()
  public latestBuildState(): BuildStateEnum | undefined {
    const hierarchy = [BuildStateEnum.STARTED, BuildStateEnum.FAILED, BuildStateEnum.SUCCEEDED, BuildStateEnum.PENDING];

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
