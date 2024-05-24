import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST, LanguageCodeDto } from '../../mo-core';
import { Expose, Transform, Type } from 'class-transformer';

export class FileTranslationCreateRequestDto {
  @IsNotEmpty()
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.ALT_TEXT.MAX)
  @Transform(
    ({ value }) =>
      (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.ALT_TEXT.MAX)
  )
  @Expose()
  altText: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.TITLE.MAX)
  @Transform(
    ({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.TITLE.MAX)
  )
  @Expose()
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.CAPTION.MAX)
  @Transform(
    ({ value }) =>
      (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.CAPTION.MAX)
  )
  @Expose()
  caption?: string;

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
