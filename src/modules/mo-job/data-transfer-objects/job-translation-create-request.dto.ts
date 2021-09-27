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
  MinLength
} from 'class-validator';
import { DTO_VALIDATION_CONST, LanguageCodeDto } from '../../mo-core';
import { Expose, Transform, Type } from 'class-transformer';
import * as _ from 'lodash';

export class JobTranslationCreateRequestDto {
  @IsNotEmpty()
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.JOB.TAG.MAX_TAGS)
  @IsString({ each: true })
  @MaxLength(DTO_VALIDATION_CONST.JOB.TAG.MAX, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) =>
      item?.substring(0, DTO_VALIDATION_CONST.JOB.TAG.MAX)
    )
  )
  @Expose()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.JOB.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.JOB.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.JOB.TITLE.MAX)
  )
  @Expose()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.JOB.TEASER_CONTENT.MIN)
  @Expose()
  teaserContent: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.JOB.CONTENT.MIN)
  @Expose()
  content: string;

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
