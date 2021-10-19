import { Expose, Transform } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';

export class NamespaceServiceKubernetesSettingsDto {
  @Expose()
  limitMemoryMB: number;

  @Expose()
  limitCpuCores: number;

  @Expose()
  replicaCount: number;

  @Transform(({ obj }) => obj.replicaCount)
  @Expose()
  replicaCountMax: number; 

  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;

  @Expose()
  ephemeralStorageMB: number;
}
