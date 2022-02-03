import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { UserCompanyCreateRequestDto } from './user-company-create-request.dto';
import { ValidateIfObjectNotEmpty } from '../../../../../utils';
import { AddressPatchRequestDto } from '../../../../mo-core';

export class UserCompanyPatchRequestDto extends UserCompanyCreateRequestDto {
  @ValidateIf((obj: UserCompanyCreateRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyCreateRequestDto))
  @IsOptional()
  @Type(() => AddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  address?: AddressPatchRequestDto;
}
