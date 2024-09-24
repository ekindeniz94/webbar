import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { ClusterHelmReleaseDto } from './cluster-helm-release.dto';

export class ClusterHelmReleaseListResponseDto extends K8sMessageResponseBaseDto<ClusterHelmReleaseDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(ClusterHelmReleaseDto, value))
  @Expose()
  data?: ClusterHelmReleaseDto[];
}
