import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { HelmEntryStatusDto } from '../helm-entry-status.dto';

export class ClusterHelmRepoUpdateResponseDto extends K8sMessageResponseBaseDto<HelmEntryStatusDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(HelmEntryStatusDto, value))
  @Expose()
  data?: HelmEntryStatusDto[];
}
