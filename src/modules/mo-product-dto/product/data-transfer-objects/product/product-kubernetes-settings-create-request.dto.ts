import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, isNumber, IsNumber, isNumberString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

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
