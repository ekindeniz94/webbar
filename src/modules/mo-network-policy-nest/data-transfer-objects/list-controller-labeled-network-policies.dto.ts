import { IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';
import { ServiceControllerEnum } from '../../mo-project-dto';

export class ListControllerLabeledNetworkPoliciesDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @Type(() => LabeledNetworkPolicyDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  labeledNetworkPolicies: LabeledNetworkPolicyDto[];
}
