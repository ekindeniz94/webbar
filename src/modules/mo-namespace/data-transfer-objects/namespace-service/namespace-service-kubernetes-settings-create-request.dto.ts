import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, isNumberString } from 'class-validator';
import { NamespaceServiceDeploymentStrategyEnum } from '../../enums';

export class NamespaceServiceKubernetesSettingsCreateRequestDto {
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  replicaCount: number;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? NamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;

  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;
}
