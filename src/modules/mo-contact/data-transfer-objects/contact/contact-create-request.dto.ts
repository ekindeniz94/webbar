import {
  IsEmail,
  IsNotEmpty,
  isString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST, LanguageCodeDto } from '../../../mo-core';
import { StripTags } from '@mo/js-utils';

export class ContactCreateRequestDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.FIRST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  )
  @StripTags()
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.LAST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.LAST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.LAST_NAME.MAX)
  )
  @StripTags()
  @Expose()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @StripTags()
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.INTEREST.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.INTEREST.MAX)
  )
  @StripTags()
  @Expose()
  interest: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.CONTACT.SUBJECT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.SUBJECT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.SUBJECT.MAX)
  )
  @StripTags()
  @Expose()
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.CONTACT.MESSAGE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.MESSAGE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.MESSAGE.MAX)
  )
  @StripTags()
  @Expose()
  message: string;
}
