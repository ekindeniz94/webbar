import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ProjectNamespaceServiceImagePullPolicy } from '../../enums';
import {IsOptional, isBoolean, ValidateNested} from 'class-validator';
import { K8sCronJobSettingsDto } from '../k8s';

export class ProjectNamespaceServiceKubernetesSettingsDto {
  @Type(() => Number)
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @Expose()
  replicaCount: number;

  @Type(() => Number)
  @Transform(({ obj }) => obj.replicaCount)
  @Expose()
  replicaCountMax: number;

  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicy;

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @IsOptional()
  @Expose()
  probesOn: boolean;

  @Type(() => K8sCronJobSettingsDto)
  @IsOptional()
  @ValidateNested()
  @Expose()
  k8sCronJobSettingsDto?: K8sCronJobSettingsDto;
}
