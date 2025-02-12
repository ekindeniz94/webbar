import { IsNotEmpty } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { ConflictingNetworkPolicyDto } from './conflicting-network-policy.dto';
import { K8sMessageResponseBaseDto } from '../../mo-kubernetes';

export class ConflictingNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<ConflictingNetworkPolicyDto[]> {
  @IsNotEmpty()
  @Type(() => ConflictingNetworkPolicyDto)
  @Expose()
  data: ConflictingNetworkPolicyDto[];
}
