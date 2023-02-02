import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Expose } from "class-transformer";
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '../../../../utils';

export class EmailWhitelistCreateRequestDto {
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  domain: string;

  @IsOptional()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @StripTags()
  @Expose()
  email: string;
}
