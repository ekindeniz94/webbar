import { Expose } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';

export class NamespaceServiceKubernetesDto {
  @Expose()
  limitMemoryMB: number;

  @Expose()
  limitCpuCores: number;

  @Expose()
  replicaCount: number;

  @Expose()
  replicaCountMax: number; // replicaCountMax=replicaCount

  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;
}
