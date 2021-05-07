import { IsEmail, IsNotEmpty, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class UserRegisterRequestDto {
  @IsNotEmpty()
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
