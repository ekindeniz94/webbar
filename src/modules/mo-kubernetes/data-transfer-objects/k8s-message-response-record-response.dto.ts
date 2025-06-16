import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { K8sPrometheusResponseDto } from './k8s-prometheus/k8s-prometheus.response.dto';

export class K8sMessageResponseRecordPrometheusDto extends K8sMessageResponseBaseDto<Record<string, K8sPrometheusResponseDto>> {
  @Transform(({ value }: { value: Record<string, K8sPrometheusResponseDto> }) => {
    const result: Record<string, K8sPrometheusResponseDto> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = MoUtils.transformToDto(K8sPrometheusResponseDto, val);
    }
    return result;
  })
  @Expose()
  data?: Record<string, K8sPrometheusResponseDto>;
}
