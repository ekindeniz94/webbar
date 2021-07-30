import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import _ from 'lodash';

export class DocumentationMiscDataCreateRequestDto {
  //Setting the Language of the Documentation Entry -> Default EN
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? 'en')
  @Expose()
  langISO_639_1: string;

  // Author ID
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @Expose()
  authorId: string;

  // TAGS
  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.TAG.MAX_TAGS)
  @IsString({ each: true })
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.TAG.MAX, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) =>
      item?.substring(0, DTO_VALIDATION_CONST.MISC.DOCUMENTATION.TAG.MAX)
    )
  )
  @Expose()
  tags: string[];

  // TITLE
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  )
  @Expose()
  title: string;

  // CONTENT
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.CONTENT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCUMENTATION.CONTENT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.DOCUMENTATION.CONTENT.MAX)
  )
  @Expose()
  content: string;

  // Published?
  @Type(() => Boolean)
  @IsOptional()
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;

  //TRANSLATIONS
  @Type(() => DocumentationMiscDataCreateRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(10)
  @ValidateNested()
  @Expose()
  translations: DocumentationMiscDataCreateRequestDto[];
}
