import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  isArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  isNumberString,
  IsOptional,
  isString,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceContainerPatchRequestDto } from '../project-namespace-service-container/project-namespace-service-container-patch-request.dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { CronjobSettingsDto } from './cronjob-settings.dto';

export class ProjectNamespaceServicePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @IsEnum(ServiceControllerEnum)
  @Expose()
  controller: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @StripTags()
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  description: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceContainerPatchRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsArray()
  @ValidateNested({ each: true, message: '$property must be an array' })
  @ArrayMinSize(1)
  @Expose()
  containers: ProjectNamespaceServiceContainerPatchRequestDto[];

  @IsNotEmpty()
  @ValidateIf((obj: ProjectNamespaceServicePatchRequestDto) => obj.controller === ServiceControllerEnum.DEPLOYMENT)
  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  replicaCount: number;

  @IsNotEmpty()
  @ValidateIf((obj: ProjectNamespaceServicePatchRequestDto) => obj.controller === ServiceControllerEnum.DEPLOYMENT)
  @IsEnum(ProjectNamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @IsNotEmpty()
  @ValidateIf((obj: ProjectNamespaceServicePatchRequestDto) => obj.controller === ServiceControllerEnum.CRON_JOB)
  @Type(() => CronjobSettingsDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cronJobSettings?: CronjobSettingsDto;
}
