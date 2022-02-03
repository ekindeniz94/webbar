import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { AddressPatchRequestDto } from '../../../mo-core';
import { UserCompanyPatchRequestDto } from './company/user-company-patch-request.dto';
import { UserCreateRequestDto } from './user-create-request.dto';

export class UserPatchRequestDto extends UserCreateRequestDto {
  @IsOptional()
  @Type(() => UserCompanyPatchRequestDto)
  @ValidateNested()
  @Expose()
  company?: UserCompanyPatchRequestDto;

  @IsOptional()
  @Type(() => AddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  address?: AddressPatchRequestDto;

  @IsOptional()
  // @ValidateIf((obj) => obj?.billingAddressEqualsAddress === false)
  @Type(() => AddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  billingAddress?: AddressPatchRequestDto;
}
