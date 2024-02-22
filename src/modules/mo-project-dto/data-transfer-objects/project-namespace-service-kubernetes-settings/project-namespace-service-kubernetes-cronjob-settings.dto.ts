import { Expose, Type } from 'class-transformer';
import { ContainerTypeEnum } from '../../enums';
import { IsEnum } from 'class-validator';

export class ProjectNamespaceServiceKubernetesCronjobSettingsDto {
  @IsEnum(ContainerTypeEnum)
  @Expose()
  source: ContainerTypeEnum;

  @Type(() => Number)
  @Expose()
  backoffLimit: number;

  @Type(() => Number)
  @Expose()
  activeDeadlineSeconds: number;

  @Type(() => String)
  @Expose()
  schedule: string;
}
//
