import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { K8sLabeledNetworkPolicy } from './labeled-network-policies.dto';
import { K8sResourceNamespaceDto } from 'src/mo-core-base';

export class LabeledNetworkPolicyCreateRequestDto {
  @IsNotEmpty()
  @Expose()
  namespace: K8sResourceNamespaceDto;
  k8sLabeledNetworkPolicy: K8sLabeledNetworkPolicy;
}
