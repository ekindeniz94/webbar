import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ListConflictingNetworkPoliciesRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
}
