import { IsEmail, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../../mo-core';
import { Expose, Transform } from 'class-transformer';

export class ResetPasswordWithEmailRequestDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @Expose()
  email: string;
}
