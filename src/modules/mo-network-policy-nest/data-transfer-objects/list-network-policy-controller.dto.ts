import { Expose, Transform, Type } from 'class-transformer';
import { IsString, IsEnum, IsArray, IsNotEmpty } from 'class-validator';
import { ServiceControllerEnum } from '../../../modules/mo-project-dto/enums/service-controller.enum';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';

export class ListNetworkPolicyControllerDto {
  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  serviceId: string;

  @IsArray()
  @Type(() => LabeledNetworkPolicyDto)
  @Transform((value) => value ?? [])
  @Expose()
  networkPolicies: LabeledNetworkPolicyDto[];
}
