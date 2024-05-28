import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, isBoolean, IsEnum, IsNotEmpty, isNumber, IsNumber, isNumberString } from 'class-validator';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../../../mo-project-dto/enums';
import {MoUtils, TransformToBoolean} from '@mo/js-utils';

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

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceDeploymentStrategyEnum)
  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @IsNotEmpty()
  @IsNumber()
  ephemeralStorageMB: number;

  @IsNotEmpty()
  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 10))
  @Type(() => Number)
  @IsNumber()
  @Expose()
  maxVolumeSizeGb: number;

  @IsNotEmpty()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  allowUnbound: boolean;
}
