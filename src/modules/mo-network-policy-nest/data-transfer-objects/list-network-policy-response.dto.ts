import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { ListNetworkPolicyNamespaceDto } from './list-network-policy-namespace.dto';

export class ListNetworkPolicyResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Transform((value) => value ?? [])
  @Type(() => ListNetworkPolicyNamespaceDto)
  @Expose()
  namespaces: ListNetworkPolicyNamespaceDto[];
}
