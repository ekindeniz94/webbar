import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean } from 'class-validator';
import { MoUtils } from '@mo/js-utils';
import { BaseEntityDto } from '@mo/database-dto';

export class ClusterSetupDto extends BaseEntityDto {
  @Transform(({ value }) => {
    if (!value) {
      return 'mogenius';
    }
    return value
      ?.toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      ?.replace(/ +/g, '')
      ?.substring(0, 64)
      .split('-')
      .filter((item: string) => item && item.length > 0)
      .join('-');
  })
  @Expose()
  namespace: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  metricsServer: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : true))
  @Expose()
  k8sManager: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : true))
  @Expose()
  trafficCollector: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : true))
  @Expose()
  podStatsCollector: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  ingressController: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  certManager: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  defaultBackend: boolean;
}
