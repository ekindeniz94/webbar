import { Expose, Transform } from 'class-transformer';
import { ListNetworkPolicyNamespaceDto } from './list-network-policy-namespace.dto';
import { K8sMessageResponseBaseDto } from '../../../modules/mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';

export class ListNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<ListNetworkPolicyNamespaceDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(ListNetworkPolicyNamespaceDto, value))
  @Expose()
  data: ListNetworkPolicyNamespaceDto[];
}
