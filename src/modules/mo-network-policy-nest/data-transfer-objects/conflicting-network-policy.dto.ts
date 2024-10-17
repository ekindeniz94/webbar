import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { ServiceControllerEnum } from '../../mo-project-dto';
import { V1NetworkPolicySpec } from '@kubernetes/client-node';

export class ConflictingNetworkPolicyDto {
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
  @Expose()
  spec: V1NetworkPolicySpec;
}
