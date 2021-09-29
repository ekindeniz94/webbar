import { Expose, Transform, Type } from 'class-transformer';
import {
  isBoolean,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  isString,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class UserRegisterRequestDto {
  @IsNotEmpty()
  @MinLength(DTO_VALIDATION_CONST.FIRST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  )
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @MinLength(DTO_VALIDATION_CONST.LAST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.LAST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.LAST_NAME.MAX)
  )
  @Expose()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @Expose()
  email: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  agreedTermsConditions: boolean;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.PASSWORD.MIN)
  @MaxLength(DTO_VALIDATION_CONST.PASSWORD.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PASSWORD.MAX)
  )
  @Matches(DTO_VALIDATION_CONST.PASSWORD.MATCHES, {
    message: 'Password error TODO.'
  })
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value))
  @Expose()
  password: string;
}
