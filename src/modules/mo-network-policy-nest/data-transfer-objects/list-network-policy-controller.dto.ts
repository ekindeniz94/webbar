import { Expose, Transform, Type } from 'class-transformer';
import { IsString, IsEnum, IsArray, IsNotEmpty } from 'class-validator';
import { ServiceControllerEnum } from '../../../modules/mo-project-dto/enums/service-controller.enum';
import { LabeledNetworkPolicyDto } from './labeled-network-policy.dto';
import { MoUtils } from '@mogenius/js-utils';

export class ListNetworkPolicyControllerDto {
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsString()
  @Expose()
  controllerName: string;

  @IsString()
  @Expose()
  serviceId: string;

  @Transform(({ value }) => MoUtils.transformToDtoList(LabeledNetworkPolicyDto, value))
  @Expose()
  networkPolicies: LabeledNetworkPolicyDto[];
}
