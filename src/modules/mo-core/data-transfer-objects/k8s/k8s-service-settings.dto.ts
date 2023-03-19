import { Expose, Type } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../../mo-namespace';

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
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;
}
