import { Expose, Transform, Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { ListNetworkPolicyNamespaceDto } from './list-network-policy-namespace.dto';
import { K8sMessageResponseBaseDto } from '../../../modules/mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';

export class ListNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<ListNetworkPolicyNamespaceDto[]> {
  @IsArray()
  @Transform((value) => value ?? [])
  @Type(() => ListNetworkPolicyNamespaceDto)
  @Expose()
  data: ListNetworkPolicyNamespaceDto[];
}
