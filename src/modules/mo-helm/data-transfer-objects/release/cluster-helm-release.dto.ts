import { Expose, Transform } from 'class-transformer';
import * as JSYAML from 'js-yaml';
import { MoUtils } from '@mogenius/js-utils';
import { ClusterHelmReleaseInfoDto } from './cluster-helm-release-info.dto';
import { isEmpty, isNumberString } from 'class-validator';

export class ClusterHelmReleaseDto {
  @Transform(({ value, obj }) => value ?? obj)
  @Expose()
  data: any;

  @Expose()
  namespace: string;

  @Transform(({ value, obj }) => obj?.chart?.metadata?.name || obj?.data?.chart?.metadata?.name || value)
  @Expose()
  chartName: string;

  @Transform(({ value, obj }) => obj?.name || obj?.data?.name || value)
  @Expose()
  releaseName: string;

  @Transform(({ value, obj }: { value: string; obj: any }) => {
    value = obj?.chart?.metadata?.version || obj?.data?.chart?.metadata?.version || value;
    if (!value || isEmpty(value)) {
      return value;
    }
    value = `${value}`;
    if (!value.startsWith('v') && isNumberString(value.charAt(0))) {
      value = `v${value}`;
    }
    return value;
  })
  @Expose()
  version: string;

  @Transform(({ value, obj }: { value: string; obj: any }) => {
    value = obj?.chart?.metadata?.appVersion || obj?.data?.chart?.metadata?.appVersion || value;
    if (!value || isEmpty(value)) {
      return value;
    }
    value = `${value}`;
    if (!value.startsWith('v') && isNumberString(value.charAt(0))) {
      value = `v${value}`;
    }
    return value;
  })
  @Expose()
  appVersion: string;

  @Transform(({ value, obj }) => JSYAML.dump(obj?.chart?.values || obj?.data?.chart?.values) ?? value)
  @Expose()
  chartValue: string;

  @Transform(
    ({ value, obj }) => MoUtils.transformToDto(ClusterHelmReleaseInfoDto, obj?.info || obj?.data?.info) ?? value
  )
  @Expose()
  info: ClusterHelmReleaseInfoDto;
}
