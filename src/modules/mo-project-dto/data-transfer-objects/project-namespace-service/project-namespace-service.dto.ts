import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isNumberString, IsOptional, isString } from 'class-validator';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { UserPublicDto } from '@mogenius/user-dto';
import { ProjectNamespaceServiceAppDto } from '../project-namespace-service-app';
import { ProjectNamespaceServiceContainerDto } from '../project-namespace-service-container/project-namespace-service-container.dto';
import { IdDto } from '@mogenius/core-dto';
import { CronjobSettingsDto } from './cronjob-settings.dto';
import { TrafficDto } from '../stats';
import { HpaSettingsDto } from './hpa';
import { ProjectNamespaceServicePortDto } from '../project-namespace-service-port';

export class ProjectNamespaceServiceDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Expose()
  controllerName: string;

  @Expose()
  description: string;

  @Type(() => ProjectNamespaceServiceAppDto)
  @Expose()
  app: ProjectNamespaceServiceAppDto;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerDto[];

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => ProjectNamespaceServicePortDto)
  @Transform(({ value }) => (isArray(value) ? value : undefined))
  @Expose()
  ports: ProjectNamespaceServicePortDto[];

  @Type(() => CronjobSettingsDto)
  @IsOptional()
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => HpaSettingsDto)
  @IsOptional()
  @Expose()
  hpaSettings?: HpaSettingsDto;

  @Type(() => TrafficDto)
  @Expose()
  traffic: TrafficDto;
}
