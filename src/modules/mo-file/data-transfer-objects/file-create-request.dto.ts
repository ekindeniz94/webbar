import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../mo-core';

export class FileCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.LANGUAGE_CODE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.LANGUAGE_CODE.MAX)
  )
  @Expose()
  languageCode: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.ALT_TEXT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.ALT_TEXT.MAX)
  )
  @Expose()
  altText: string;


  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.TITLE.MAX)
  )
  @Expose()
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.CAPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.CAPTION.MAX)
  )
  @Expose()
  caption?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.COPYRIGHT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.COPYRIGHT.MAX)
  )
  @Expose()
  copyright?: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsOptional()
  @IsBoolean()
  @Expose()
  defaultTranslation?: boolean;
}
