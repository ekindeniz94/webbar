import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../utils';
import { DTO_VALIDATION_CONST } from '../constantes';

export class AddressCreateRequestDto {
  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  )
  @Expose()
  addressLine1: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE2.MAX)
  )
  @Expose()
  addressLine2: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE3.MAX)
  )
  @Expose()
  addressLine3: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.STATE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.STATE.MAX)
  )
  @Expose()
  state: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  )
  @Expose()
  zip: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  )
  @Expose()
  city: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsNotEmpty()
  @Expose()
  country: string;
}
