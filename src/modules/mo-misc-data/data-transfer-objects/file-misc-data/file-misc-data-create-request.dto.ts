import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class FileMiscDataCreateRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.MISC.FILE.ALT_TEXT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.FILE.ALT_TEXT.MAX)
  )
  @Expose()
  altText: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.MISC.FILE.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.FILE.NAME.MAX)
  )
  @Expose()
  name: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
