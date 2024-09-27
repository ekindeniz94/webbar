import { Expose, Transform } from 'class-transformer';
import * as JSYAML from 'js-yaml';
import { MoUtils } from '@mogenius/js-utils';
import { ClusterHelmReleaseInfoDto } from './cluster-helm-release-info.dto';
import { isEmpty } from 'class-validator';

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

  @Transform(({ value, obj }: { value: string; obj: any }) => {
    value = obj?.data?.chart?.metadata?.version ?? value;
    if (!value || isEmpty(value)) {
      return value;
    }
    value = `${value}`;
    if (!value.startsWith('v')) {
      value = `v${value}`;
    }
    return value;
  })
  @Expose()
  version: string;

  @Transform(({ value, obj }: { value: string; obj: any }) => {
    value = obj?.data?.chart?.metadata?.appVersion ?? value;
    if (!value || isEmpty(value)) {
      return value;
    }
    value = `${value}`;
    if (!value.startsWith('v')) {
      value = `v${value}`;
    }
    return value;
  })
  @Expose()
  appVersion: string;

  @Transform(({ value, obj }) => JSYAML.dump(obj?.data?.chart?.values) ?? value)
  @Expose()
  chartValue: string;

  @Transform(({ value, obj }) => MoUtils.transformToDto(ClusterHelmReleaseInfoDto, obj?.data?.info) ?? value)
  @Expose()
  info: ClusterHelmReleaseInfoDto;
}
