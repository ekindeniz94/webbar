import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST, IsInStringList } from '../../../mo-core';

export class UserPhonePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  // TODO
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
  )
  @IsInStringList(DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.IS_IN_STRING_LIST)
  @Expose()
  phoneNumberPrefix: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
  )
  @Expose()
  phoneNumber: string;
}
