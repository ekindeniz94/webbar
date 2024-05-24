import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { AppContainerDto } from '../../../mo-app-library-dto/data-transfer-objects/app-container/app-container.dto';
import { AppTagDto } from '../../../mo-app-library-dto/data-transfer-objects/app-tag.dto';
import { AppLibraryStateEnum } from '../../../mo-app-library-dto/enums/app-library-state.enum';
import { isArray, isNumberString, isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { CronjobSettingsDto } from '../project-namespace-service';

export class ProjectNamespaceServiceAppDto {
  @Expose()
  id: string;

  @Type(() => AppTagDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  tags: AppTagDto[];

  @Expose()
  description: string;

  @Expose()
  descriptionShort: string;

  @Expose()
  version: string;

  @Expose()
  icon: string;

  @Transform(({ value }) => (value && isString(value) ? value : 'https://docs.mogenius.com/'))
  @Expose()
  documentationLink: string;

  @Expose()
  state: AppLibraryStateEnum;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string; // TODO name -> displayName

  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  ) // unique namespace-name + controller-name(63, a-z0-9-) TODO testing
  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => CronjobSettingsDto)
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => AppContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: AppContainerDto[];
}
