import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../mo-core';

export class ContactCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value ?? 'en')
  @Expose()
  langISO_639_1: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.FIRST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  )
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.LAST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.LAST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.LAST_NAME.MAX)
  )
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
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.INTEREST.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.INTEREST.MAX)
  )
  @Expose()
  interest: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.CONTACT.SUBJECT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.SUBJECT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.SUBJECT.MAX)
  )
  @Expose()
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.CONTACT.MESSAGE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.CONTACT.MESSAGE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.CONTACT.MESSAGE.MAX)
  )
  @Expose()
  message: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  subscribeNewsletter: boolean;

  @Type(() => ContactCreateRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(2)
  @ValidateNested()
  @Expose()
  translations: ContactCreateRequestDto[];
}
