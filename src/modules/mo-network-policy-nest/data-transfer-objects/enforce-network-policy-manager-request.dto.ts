import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class EnforceNetworkPolicyManagerRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
}
