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
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { AppLibraryStateEnum } from '../../enums';
import {
  CronjobSettingsDto,
  MoProjectDtoUtils,
  PROJECT_CONST,
  ProjectNamespaceServiceDeploymentStrategyEnum,
  ServiceControllerEnum
} from '../../../mo-project-dto';
import { AppContainerCreateRequestDto } from '../app-container/app-container-create-request.dto';

export class AppCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string; // TODO name -> displayName

  @IsOptional()
  @IsString()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  ) // unique namespace-name + controller-name(63, a-z0-9-) TODO testing
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Transform(({ value }) => value ?? ServiceControllerEnum.DEPLOYMENT)
  @Expose()
  controller: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  descriptionShort: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? value : '1.0'))
  @Expose()
  version: string;

  @IsOptional()
  @IsString()
  @Expose()
  icon: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? value : 'https://docs.mogenius.com/'))
  @Expose()
  documentationLink: string;

  @Transform(({ value }) => (value ? value : AppLibraryStateEnum.UNAVAILABLE))
  @IsNotEmpty()
  @IsEnum(AppLibraryStateEnum)
  @Expose()
  state: AppLibraryStateEnum;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @IsOptional()
  @IsEnum(ProjectNamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @IsNotEmpty()
  @ValidateIf((obj: AppCreateRequestDto) => obj.controller === ServiceControllerEnum.CRON_JOB)
  @Type(() => CronjobSettingsDto)
  @Transform(({ value, obj }) => (obj.controller === ServiceControllerEnum.CRON_JOB ? value : undefined))
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @IsNotEmpty()
  @Type(() => AppContainerCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsArray()
  @ValidateNested({ each: true, message: '$property must be an array' })
  @ArrayMinSize(1)
  @Expose()
  containers: AppContainerCreateRequestDto[];
}
