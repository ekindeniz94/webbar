import { Expose, Transform } from 'class-transformer';
import { IsOptional, isString, IsString, MaxLength, ValidateIf } from 'class-validator';
import { StripTags, ValidateIfObjectNotEmpty } from '../../../utils';
import { DTO_VALIDATION_CONST } from '../constantes';

export class AddressCreateRequestDto {
  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  )
  @StripTags()
  @Expose()
  addressLine1: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE2.MAX)
  )
  @StripTags()
  @Expose()
  addressLine2: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE1.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ADDRESS_LINE3.MAX)
  )
  @StripTags()
  @Expose()
  addressLine3: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.STATE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.STATE.MAX)
  )
  @StripTags()
  @Expose()
  state: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.ZIP.MAX)
  )
  @StripTags()
  @Expose()
  zip: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.ADDRESS.CITY.MAX)
  )
  @StripTags()
  @Expose()
  city: string;

  @ValidateIf((obj: AddressCreateRequestDto) => ValidateIfObjectNotEmpty(obj, AddressCreateRequestDto))
  @IsOptional()
  @StripTags()
  @Expose()
  country: string;
}
