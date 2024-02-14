import { Expose, Type } from 'class-transformer';

export class ProjectKubernetesLimitsDto {
  @Type(() => Number)
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Expose()
  limitCpuCores: number;

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;
}
