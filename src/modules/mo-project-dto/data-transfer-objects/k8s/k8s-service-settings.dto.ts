import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../enums/project-namespace-service-deployment-strategy.enum';
import { IsOptional, isBoolean } from 'class-validator';

export class K8sServiceSettingsDto {
  @Type(() => Number)
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;

  @Type(() => Number)
  @Expose()
  replicaCount: number;

  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @IsOptional()
  @Expose()
  probesOn: boolean;
}
