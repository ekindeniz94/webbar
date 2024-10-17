import { Expose, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';
import { ServiceControllerEnum } from '../../mo-project-dto';

export class DetachLabeledNetworkPolicyRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @Type(() => LabeledNetworkPolicyDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  labeledNetworkPolicy: LabeledNetworkPolicyDto;
}
