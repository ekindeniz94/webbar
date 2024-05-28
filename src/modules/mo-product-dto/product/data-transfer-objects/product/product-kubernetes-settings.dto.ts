import { Expose, Transform, Type } from 'class-transformer';
import { isNumber, isNumberString } from 'class-validator';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../../../mo-project-dto';
import { TransformToBoolean } from '@mo/js-utils';

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

  @TransformToBoolean(false)
  @Expose()
  allowUnbound: boolean;
}
