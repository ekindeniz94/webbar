import { Expose, Transform, Type } from 'class-transformer';
import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { ListNetworkPolicyControllerDto } from './list-network-policy-controller.dto';
import { ConflictingNetworkPolicyDto } from './conflicting-network-policy.dto';
import { MoUtils } from '@mogenius/js-utils';
import { NetworkPolicyDto } from './network-policy.dto';

export class ListNetworkPolicyNamespaceDto {
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

  @Transform(({ value }) => MoUtils.transformToDtoList(ListNetworkPolicyControllerDto, value))
  @Expose()
  controllers: ListNetworkPolicyControllerDto[];

  @Transform(({ value }) => MoUtils.transformToDtoList(ConflictingNetworkPolicyDto, value))
  @Expose()
  unmanagedPolicies: ConflictingNetworkPolicyDto[];

  @Transform(({ value }) => MoUtils.transformToDtoList(NetworkPolicyDto, value))
  @Expose()
  managedPolicies: NetworkPolicyDto[];
}
