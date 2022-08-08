import { Expose } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../../mo-namespace';

export class K8sServiceSettingsDto {
  @Expose()
  limitCpuCores: number;

  @Expose()
  limitMemoryMB: number;

  @Expose()
  ephemeralStorageMB: number;

  @Expose()
  replicaCount: number;

  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;
}
