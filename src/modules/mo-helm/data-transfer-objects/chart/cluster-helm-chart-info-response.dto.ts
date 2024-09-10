import { Expose, Transform } from 'class-transformer';
import { HelmEntryDto } from '../helm-entry.dto';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { ClusterHelmChartInfoDto } from './cluster-helm-chart-info.dto';

export class ClusterHelmChartInfoResponseDto extends K8sMessageResponseBaseDto<ClusterHelmChartInfoDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(ClusterHelmChartInfoDto, value))
  @Expose()
  data?: ClusterHelmChartInfoDto[];
}
