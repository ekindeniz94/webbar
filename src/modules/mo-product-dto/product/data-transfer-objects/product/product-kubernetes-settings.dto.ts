import { Expose, Transform, Type } from 'class-transformer';
import { isNumber, isNumberString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ProductKubernetesSettingsDto {
  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? parseFloat(value) : value))
  @Expose()
  limitCpuCores: number;

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
