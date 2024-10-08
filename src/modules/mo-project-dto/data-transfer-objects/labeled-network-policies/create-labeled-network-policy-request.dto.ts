import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sLabeledNetworkPolicyDto } from './labeled-network-policies.dto';

export class CreateLabeledNetworkPolicyRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
  @Expose()
  labeledNetworkPolicy: K8sLabeledNetworkPolicyDto;
}
