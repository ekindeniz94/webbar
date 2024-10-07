import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { K8sLabeledNetworkPolicy } from './labeled-network-policies.dto';

export class CreateLabeledNetworkPolicyRequestDto {
  @IsNotEmpty()
  @Expose()
  namespaceName: string;
  labeledNetworkPolicy: K8sLabeledNetworkPolicy;
}
