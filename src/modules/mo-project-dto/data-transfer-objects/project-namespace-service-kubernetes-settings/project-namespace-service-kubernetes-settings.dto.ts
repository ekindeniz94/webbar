import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../enums';

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

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;
}
