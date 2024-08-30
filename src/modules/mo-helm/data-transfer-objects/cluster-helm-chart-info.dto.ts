import { Expose, Transform } from 'class-transformer';

export class ClusterHelmChartInfoDto {
  @Expose()
  name: string;

  @Expose()
  version: string;

  @Transform(({ value, obj }) => value ?? obj?.app_version, { toClassOnly: true })
  @Expose()
  appVersion: string;

  @Expose()
  description: string;
}
