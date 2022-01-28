import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString, MaxLength, ValidateIf, ValidateNested } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../../utils';
import { AddressCreateRequestDto, DTO_VALIDATION_CONST } from '../../../../mo-core';

export class UserCompanyCreateRequestDto {
  @ValidateIf((obj: UserCompanyCreateRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.COMPANY.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.COMPANY.NAME.MAX)
  )
  @Expose()
  name: string;

  @ValidateIf((obj: UserCompanyCreateRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.COMPANY.VAT_ID.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.COMPANY.VAT_ID.MAX)
  )
  @Expose()
  vatNumber: string;

  @ValidateIf((obj: UserCompanyCreateRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyCreateRequestDto))
  @IsOptional()
  @Type(() => AddressCreateRequestDto)
  @ValidateNested()
  @Expose()
  address?: AddressCreateRequestDto;
}
