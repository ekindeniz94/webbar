import { Expose, Transform, Type } from 'class-transformer';
import { isNumberString, isString } from 'class-validator';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { IdDto } from '@mogenius/core-dto';
import { CronjobSettingsDto } from './cronjob-settings.dto';

export class ProjectNamespaceServiceFlatDto extends BaseEntityDto {
  @Type(() => IdDto)
  @Expose()
  createdById: IdDto;

  @Type(() => IdDto)
  @Expose()
  projectNamespaceId: IdDto;

  @Type(() => IdDto)
  @Expose()
  appId: IdDto;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Expose()
  description: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => CronjobSettingsDto)
  @Expose()
  cronJobSettings?: CronjobSettingsDto;
}
