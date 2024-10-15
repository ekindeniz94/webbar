import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { NetworkPolicyLabeledDto } from './network-policy-labeled.dto';

export class NetworkPolicyCreateLabeledRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @Type(() => NetworkPolicyLabeledDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  labeledNetworkPolicy: NetworkPolicyLabeledDto;
}
