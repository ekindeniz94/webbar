import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf, ValidateNested } from 'class-validator';
import { UserCompanyCreateRequestDto } from './user-company-create-request.dto';
import { ValidateIfObjectNotEmpty } from '../../../../../utils';
import { AddressPatchRequestDto } from '../../../../mo-core';

export class UserCompanyPatchRequestDto extends UserCompanyCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @ValidateIf((obj: UserCompanyCreateRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyCreateRequestDto))
  @IsOptional()
  @Type(() => AddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  address?: AddressPatchRequestDto;
}
