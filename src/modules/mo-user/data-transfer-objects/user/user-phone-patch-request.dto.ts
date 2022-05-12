import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, isString, IsString, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '../../../../utils';

export class UserPhonePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  id: string;

  // TODO
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
  @Transform(({ value }) => {
    value = (value && isString(value) ? value.trim() : value)
      ?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
      ?.toLowerCase()
      .replace(/[^0-9+]/g, ' ')
      ?.replace(/ +/g, '');
    return value;
  })
  @StripTags()
  @Expose()
  phoneNumberPrefix: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
  @Transform(({ value }) => {
    value = (value && isString(value) ? value.trim() : value)
      ?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
      ?.toLowerCase()
      .replace(/[^0-9]/g, ' ')
      ?.replace(/ +/g, '');
    return value;
  })
  @StripTags()
  @Expose()
  phoneNumber: string;
}
