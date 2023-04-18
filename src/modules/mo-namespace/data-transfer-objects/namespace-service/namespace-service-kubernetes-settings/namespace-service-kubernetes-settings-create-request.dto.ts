import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, isNumberString } from 'class-validator';
import { NamespaceServiceDeploymentStrategyEnum2 } from '../../../enums';

export class NamespaceServiceKubernetesSettingsCreateRequestDto {
  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNumber()
  @Expose()
  replicaCount: number;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceDeploymentStrategyEnum2)
  @Transform(({ value }) => value ?? NamespaceServiceDeploymentStrategyEnum2.RECREATE)
  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum2;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;
}
