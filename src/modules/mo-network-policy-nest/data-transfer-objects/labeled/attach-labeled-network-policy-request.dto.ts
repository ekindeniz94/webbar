import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';
import { ServiceControllerEnum } from '../../../mo-project-dto';

export class AttachLabeledNetworkPolicyRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @Type(() => LabeledNetworkPolicyDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  labeledNetworkPolicy: LabeledNetworkPolicyDto;
}
