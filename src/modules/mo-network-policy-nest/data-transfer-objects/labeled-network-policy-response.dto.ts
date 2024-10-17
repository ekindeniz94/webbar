import { IsNotEmpty } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../mo-kubernetes';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';

export class LabeledNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<LabeledNetworkPolicyDto[]> {
  @IsNotEmpty()
  @Type(() => LabeledNetworkPolicyDto)
  @Expose()
  data: LabeledNetworkPolicyDto[];
}
