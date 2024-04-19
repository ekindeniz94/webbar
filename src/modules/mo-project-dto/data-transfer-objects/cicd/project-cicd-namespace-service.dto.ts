import { Expose } from 'class-transformer';
import moment from 'moment';
import { BuildStateEnum } from '../../../mo-product-dto/product/enums/k8s-manager/build-state.enum';
import { ProjectCiCdNamespaceServiceContainerDto } from './project-cicd-namespace-service-container.dto';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectCiCdNamespaceServiceDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  containers: ProjectCiCdNamespaceServiceContainerDto[]; // Always

  public latestBuildState(): BuildStateEnum | undefined {
    const hierarchy = [BuildStateEnum.STARTED, BuildStateEnum.FAILED, BuildStateEnum.SUCCEEDED, BuildStateEnum.PENDING];

    return this.containers.reduce((acc: BuildStateEnum | undefined, container) => {
      if (!container.latestBuildState) {
        return acc;
      }
      if (!acc || hierarchy.indexOf(acc) < hierarchy.indexOf(container.latestBuildState)) {
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
