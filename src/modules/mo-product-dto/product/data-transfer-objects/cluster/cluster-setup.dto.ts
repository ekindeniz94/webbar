import { Expose, Transform } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';
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

  @TransformToBoolean(false)
  @Expose()
  metricsServer: boolean;

  @TransformToBoolean(true)
  @Expose()
  k8sManager: boolean;

  @TransformToBoolean(true)
  @Expose()
  trafficCollector: boolean;

  @TransformToBoolean(true)
  @Expose()
  podStatsCollector: boolean;

  @TransformToBoolean(false)
  @Expose()
  ingressController: boolean;

  @TransformToBoolean(false)
  @Expose()
  certManager: boolean;

  @TransformToBoolean(false)
  @Expose()
  defaultBackend: boolean;
}
