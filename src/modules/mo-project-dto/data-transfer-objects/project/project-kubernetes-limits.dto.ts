import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, isBoolean, IsNotEmpty, isNumber, IsNumber } from 'class-validator';
import {MoUtils, TransformToBoolean} from '@mo/js-utils';

export class ProjectKubernetesLimitsDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  ephemeralStorageMB: number;

  @IsNotEmpty()
  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 10))
  @Type(() => Number)
  @IsNumber()
  @Expose()
  maxVolumeSizeGb: number;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  repoYamlSync: boolean;

  @IsNotEmpty()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  allowUnbound: boolean;
}
