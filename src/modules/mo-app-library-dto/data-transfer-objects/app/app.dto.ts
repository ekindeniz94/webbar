import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isNumberString, isString } from 'class-validator';
import { AppTagDto } from '../app-tag.dto';
import { AppLibraryStateEnum } from '../../enums';
import {
  CronjobSettingsDto,
  MoProjectDtoUtils,
  PROJECT_CONST,
  ProjectDisplayNameDto,
  ProjectNamespaceServiceDeploymentStrategyEnum,
  ServiceControllerEnum
} from '../../../mo-project-dto';
import { BaseEntityDto } from '@mogenius/database-dto';
import { OrganizationNameDto } from '../../../mo-product-dto';
import { AppContainerDto } from '../app-container/app-container.dto';
import { AppPortDto } from '../app-port.dto';

export class AppDto extends BaseEntityDto {
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => ProjectDisplayNameDto)
  @Expose()
  project: ProjectDisplayNameDto;

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

  @Type(() => AppPortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: AppPortDto[];

  @Type(() => CronjobSettingsDto)
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => AppContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: AppContainerDto[];
}
