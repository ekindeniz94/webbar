import { Expose, Transform, Type } from 'class-transformer';
import { IsString, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { ListNetworkPolicyControllerDto } from './list-network-policy-controller.dto';

export class ListNetworkPolicyNamespaceDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ListNetworkPolicyControllerDto)
  @Transform((value) => value ?? [])
  @Expose()
  controllers: ListNetworkPolicyControllerDto[];

  @IsArray()
  @Transform((value) => value ?? [])
  @Expose()
  unmanagedPolicies: any[]; // Replace with specific DTO if needed
}
