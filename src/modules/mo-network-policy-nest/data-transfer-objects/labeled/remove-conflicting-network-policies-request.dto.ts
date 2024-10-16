import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class RemoveConflictingNetworkPoliciesRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
}
