import { Expose, Transform } from 'class-transformer';
import { HelmEntryDto } from '../helm-entry.dto';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';

export class ClusterHelmRepoListResponseDto extends K8sMessageResponseBaseDto<HelmEntryDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(HelmEntryDto, value))
  @Expose()
  data?: HelmEntryDto[];
}
