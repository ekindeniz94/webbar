import { Expose, Type } from 'class-transformer';

export class K8sCronJobSettingsDto {
  @Type(() => Number)
  @Expose()
  backOffLimit: number;

  @Type(() => Number)
  @Expose()
  activeDeadlineSeconds: number;

  @Type(() => String)
  @Expose()
  schedule: string;
}
