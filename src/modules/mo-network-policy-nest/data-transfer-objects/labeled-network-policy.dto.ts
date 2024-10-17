import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
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
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  port: number;

  @IsNotEmpty()
  @IsEnum(NetworkPolicyPortTypeEnum)
  @Expose()
  portType: NetworkPolicyPortTypeEnum;
}
