import { Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { ConflictingNetworkPolicyDto } from './conflicting-network-policy.dto';
import { MoUtils } from '@mogenius/js-utils';
import { NetworkPolicyDto } from './network-policy.dto';

export class ListManagedAndUnmanagedNetworkPolicyNamespace {
  @IsString()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  displayName: string;

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  projectId: string;

  @Transform(({ value }) => MoUtils.transformToDtoList(ConflictingNetworkPolicyDto, value))
  @Expose()
  unmanagedPolicies: ConflictingNetworkPolicyDto[];

  @Transform(({ value }) => MoUtils.transformToDtoList(NetworkPolicyDto, value))
  @Expose()
  managedPolicies: NetworkPolicyDto[];
}
