import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, isBoolean, isNumberString } from 'class-validator';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ProjectNamespaceServiceImagePullPolicy } from '../../enums';
import { ProjectNamespaceServiceKubernetesCronjobSettingsDto } from './project-namespace-service-kubernetes-cronjob-settings.dto';

export class ProjectNamespaceServiceKubernetesSettingsCreateRequestDto {
  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  replicaCount: number;

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceImagePullPolicy)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceImagePullPolicy.IF_NOT_PRESENT)
  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicy;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @IsOptional()
  @Expose()
  probesOn: boolean;

  @Type(() => ProjectNamespaceServiceKubernetesCronjobSettingsDto)
  @IsOptional()
  @Expose()
  cronjobSettings?: ProjectNamespaceServiceKubernetesCronjobSettingsDto;
}
