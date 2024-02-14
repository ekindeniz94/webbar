import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, isNumberString } from 'class-validator';
import {
  ProjectNamespaceServiceDeploymentStrategyEnum,
  ProjectNamespaceServiceImagePullPolicyEnum,
  ProjectNamespaceServiceKubernetesCronjobSettingsDto
} from '../../../../mo-project-dto';

export class ProductKubernetesSettingsDto {
  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceImagePullPolicyEnum.IF_NOT_PRESENT)
  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  ephemeralStorageMB: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @Expose()
  probesOn: boolean;

  @Type(() => ProjectNamespaceServiceKubernetesCronjobSettingsDto)
  @Expose()
  cronjobSettings?: ProjectNamespaceServiceKubernetesCronjobSettingsDto;
}
