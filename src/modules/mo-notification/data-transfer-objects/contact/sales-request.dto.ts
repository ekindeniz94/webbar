import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';
import { USER_CONST } from '@mogenius/user-dto';
import { StripTags } from '@mogenius/js-utils';

export class SalesRequestDto {
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, USER_CONST.EMAIL.MAX))
  @StripTags()
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  message: string;

  @IsOptional()
  @IsString()
  @Expose()
  phoneNumber: string;
}
