import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { ClusterHelmReleaseStatusInfoDto } from './cluster-helm-release-status-info.dto';

export class ClusterHelmReleaseStatusResponseDto extends K8sMessageResponseBaseDto<ClusterHelmReleaseStatusInfoDto> {
  @Transform(({ value }) => MoUtils.transformToDto(ClusterHelmReleaseStatusInfoDto, value))
  @Expose()
  data?: ClusterHelmReleaseStatusInfoDto;
}
