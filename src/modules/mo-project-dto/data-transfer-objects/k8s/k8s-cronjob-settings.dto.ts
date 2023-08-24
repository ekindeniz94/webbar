import { Expose, Type } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { ServiceTypeEnum } from '../../enums';

export class K8sCronJobSettingsDto {
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
