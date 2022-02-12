import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceKubernetesSettingsDto extends BaseEntityDto {
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
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;
}
