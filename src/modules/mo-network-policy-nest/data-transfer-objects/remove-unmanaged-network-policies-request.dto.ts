import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class RemoveUnmanagedNetworkPolicyManagerRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsArray()
  @IsNotEmpty()
  @Expose()
  policies: string[];
}
