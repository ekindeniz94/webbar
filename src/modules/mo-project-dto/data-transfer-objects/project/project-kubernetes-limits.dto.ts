import { Expose, Transform, Type } from 'class-transformer';
import { isNumber, IsNumber } from 'class-validator';

export class ProjectKubernetesLimitsDto {
  @Type(() => Number)
  @IsNumber()
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  ephemeralStorageMB: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 10))
  @Type(() => Number)
  @IsNumber()
  @Expose()
  maxVolumeSizeGb: number;
}
