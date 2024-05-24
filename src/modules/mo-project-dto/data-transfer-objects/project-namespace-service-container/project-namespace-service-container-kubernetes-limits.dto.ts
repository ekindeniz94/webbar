import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceImagePullPolicyEnum } from '../../enums';
import { IsBoolean, isBoolean, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class ProjectNamespaceServiceContainerKubernetesLimitsDto {
  @IsNumber()
  @Type(() => Number)
  @Expose()
  limitMemoryMB: number;

  @IsNumber()
  @Type(() => Number)
  @Expose()
  limitCpuCores: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceImagePullPolicyEnum.ALWAYS)
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceImagePullPolicyEnum)
  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;

  @IsNumber()
  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;

  @IsBoolean()
  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @Expose()
  probesOn: boolean;
}
