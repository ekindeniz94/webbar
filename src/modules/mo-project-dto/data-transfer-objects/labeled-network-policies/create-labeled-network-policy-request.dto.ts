import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sLabeledNetworkPolicyDto } from './labeled-network-policies.dto';

export class CreateLabeledNetworkPolicyRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
  
  @IsNotEmpty()
  @Type(() => K8sLabeledNetworkPolicyDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  labeledNetworkPolicy: K8sLabeledNetworkPolicyDto;
}
