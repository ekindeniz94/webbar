import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsNotEmpty, isNumber, isNumberString } from 'class-validator';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../../../mo-project-dto';
import { MoUtils } from '@mo/js-utils';

export class ProductKubernetesSettingsDto {
  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @Expose()
  limitCpuCores: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  ephemeralStorageMB: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 10))
  @Type(() => Number)
  @Expose()
  maxVolumeSizeGb: number;

  @IsNotEmpty()
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : true))
  @Expose()
  repoYamlSync: boolean;

  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  allowUnbound: boolean;
}
