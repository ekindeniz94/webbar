import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, isString, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class UserAddressPatchRequestDto {
  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.STREET.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.STREET.MAX)
  )
  @Expose()
  street: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  )
  @Expose()
  zip: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  )
  @Expose()
  city: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.COUNTRY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.COUNTRY.MAX)
  )
  @Expose()
  country: string;
}
