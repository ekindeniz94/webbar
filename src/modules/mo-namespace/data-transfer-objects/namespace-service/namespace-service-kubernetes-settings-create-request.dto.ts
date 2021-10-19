import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';

export class NamespaceServiceKubernetesSettingsCreateRequestDto {
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  replicaCount: number;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? NamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  dockerImageCountMax: number;
}
