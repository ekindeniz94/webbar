import { IsOptional, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../../mo-core';
import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags } from '../../../../../utils';

export class ResetPasswordRequestDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.nanoid())
  @StripTags()
  @Expose()
  messageId: string;

  @IsOptional()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.PASSWORD.MATCHES, {
    message: 'Password error TODO.'
  })
  @MinLength(DTO_VALIDATION_CONST.PASSWORD.MIN)
  @MaxLength(DTO_VALIDATION_CONST.PASSWORD.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PASSWORD.MAX)
  )
  @StripTags()
  @Expose()
  password: string;
}
