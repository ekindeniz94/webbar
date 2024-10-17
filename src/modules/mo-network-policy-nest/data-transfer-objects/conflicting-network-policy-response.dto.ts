import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { ServiceControllerEnum } from '../../mo-project-dto';
import { V1NetworkPolicySpec } from '@kubernetes/client-node';
import { ConflictingNetworkPolicyDto } from './conflicting-network-policy.dto';
import { K8sMessageResponseBaseDto } from '../../mo-kubernetes';

export class ConflictingNetworkPolicyResponseDto extends K8sMessageResponseBaseDto<ConflictingNetworkPolicyDto[]> {
  @IsNotEmpty()
  @Type(() => ConflictingNetworkPolicyDto)
  @Expose()
  data: ConflictingNetworkPolicyDto[];
}
