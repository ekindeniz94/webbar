import { Expose, Type } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { ProjectNamespaceServiceImagePullPolicyEnum } from '../../enums';

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

  @IsEnum(ProjectNamespaceServiceImagePullPolicyEnum)
  @Expose()
  imagePullPolicy: number;
}
