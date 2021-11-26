import { Expose, Transform } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceKubernetesSettingsDto extends BaseEntityDto {
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
