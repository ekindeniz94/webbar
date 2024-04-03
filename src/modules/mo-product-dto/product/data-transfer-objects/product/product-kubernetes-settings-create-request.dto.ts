import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsEnum, IsNotEmpty, IsNumber, isNumberString, IsOptional } from 'class-validator';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../../../mo-project-dto/enums';

export class ProductKubernetesSettingsCreateRequestDto {
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

  // @Type(() => Number)
  // @IsNotEmpty()
  // @Transform(({ value }) => (isNumberString(value) ? +value : value))
  // @IsNumber()
  // @Expose()
  // replicaCount: number;

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  // @Transform(({ value }) => value ?? ProjectNamespaceServiceImagePullPolicyEnum.IF_NOT_PRESENT)
  // @IsEnum(ProjectNamespaceServiceImagePullPolicyEnum)
  // @IsNotEmpty()
  // @Expose()
  // imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @IsOptional()
  @Expose()
  probesOn: boolean;
}
