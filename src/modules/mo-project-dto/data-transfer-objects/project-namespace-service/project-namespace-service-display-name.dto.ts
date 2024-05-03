import { Expose, Transform, Type } from 'class-transformer';
import { isNumberString, isString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { IdDto } from '@mo/core-dto';
import { CronjobSettingsDto } from './cronjob-settings.dto';

export class ProjectNamespaceServiceDisplayNameDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Expose()
  description: string;
}
