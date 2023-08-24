import { Expose, Type } from 'class-transformer';
import { ServiceTypeEnum } from '../../enums';
import { IsEnum } from 'class-validator';

export class ProjectNamespaceServiceKubernetesCronjobSettingsDto {
  @IsEnum(ServiceTypeEnum)
  @Expose()
  source: ServiceTypeEnum;

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
