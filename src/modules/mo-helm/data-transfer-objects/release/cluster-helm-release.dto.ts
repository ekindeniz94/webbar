import { Expose, Transform } from 'class-transformer';
import moment from 'moment/moment';

export class ClusterHelmReleaseDto {
  @Transform(({ value, obj }) => value ?? obj)
  @Expose()
  data: any;

  @Expose()
  namespace: string;

  @Transform(({ value, obj }) => obj?.data?.chart?.metadata?.name ?? value)
  @Expose()
  chartName: string;

  @Transform(({ value, obj }) => obj?.data?.name ?? value)
  @Expose()
  releaseName: string;

  @Transform(({ value, obj }) => obj?.data?.chart?.metadata?.version ?? value)
  @Expose()
  version: string;

  @Transform(({ value, obj }) => obj?.data?.chart?.metadata?.appVersion ?? value)
  @Expose()
  appVersion: string;

  @Transform(({ value, obj }) => obj?.data?.info?.status ?? value)
  @Expose()
  status: string;

  @Transform(({ value, obj }) => {
    value = obj?.data?.info?.last_deployed ?? value;
    return value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value;
  })
  @Expose()
  lastDeployed: string;
}
