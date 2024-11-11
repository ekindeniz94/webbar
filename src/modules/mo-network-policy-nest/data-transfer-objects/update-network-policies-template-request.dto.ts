import { IsNotEmpty, IsNumber, isNumberString, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { NetworkPolicyPortTypeEnum } from '../enums';

export class UpdateNetworkPoliciesTemplateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value, obj }) => {
    if (!value && obj.portType) {
      return obj.portType;
    }
    return value;
  })
  @Expose()
  protocol: NetworkPolicyPortTypeEnum;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  port: number;
}
