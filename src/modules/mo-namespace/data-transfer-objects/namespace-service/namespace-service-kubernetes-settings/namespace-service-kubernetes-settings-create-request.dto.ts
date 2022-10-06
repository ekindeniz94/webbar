import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, isNumberString } from 'class-validator';
import { NamespaceServiceDeploymentStrategyEnum } from '../../../enums';

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
  @IsEnum(NamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? NamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: NamespaceServiceDeploymentStrategyEnum;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;
}
