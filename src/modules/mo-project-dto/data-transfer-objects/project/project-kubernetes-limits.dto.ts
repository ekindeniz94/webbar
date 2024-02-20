import { Expose, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

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
}
