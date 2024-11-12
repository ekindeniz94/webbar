import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../modules/mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { ListManagedAndUnmanagedNetworkPolicyNamespaceDto } from './list-managed-and-unmanaged-network-policy-namespace.dto';

export class ListManagedAndUnmanagedNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<
  ListManagedAndUnmanagedNetworkPolicyNamespaceDto[]
> {
  @Transform(({ value }) => MoUtils.transformToDtoList(ListManagedAndUnmanagedNetworkPolicyNamespaceDto, value))
  @Expose()
  data: ListManagedAndUnmanagedNetworkPolicyNamespaceDto[];
}
