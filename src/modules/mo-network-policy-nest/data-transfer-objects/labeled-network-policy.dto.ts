import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { NetworkPolicyPortTypeEnum } from '../enums';

export class LabeledNetworkPolicyDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  type: 'egress' | 'ingress';

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  port: number;

  @IsNotEmpty()
  @IsEnum(NetworkPolicyPortTypeEnum)
  @Expose()
  portType: NetworkPolicyPortTypeEnum;
}
