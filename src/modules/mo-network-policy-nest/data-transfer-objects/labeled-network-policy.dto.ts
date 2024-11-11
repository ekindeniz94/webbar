import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { NetworkPolicyPortTypeEnum, NetworkPolicyTypeEnum } from '../enums';

export class LabeledNetworkPolicyDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsEnum(NetworkPolicyTypeEnum)
  @Expose()
  type: NetworkPolicyTypeEnum;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  port: number;

  @IsNotEmpty()
  @IsEnum(NetworkPolicyPortTypeEnum)
  @Expose()
  portType: NetworkPolicyPortTypeEnum;
}
