import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
  IsHexColor,
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
import * as _ from 'lodash';

export class JobMiscDataCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value ?? 'en')
  @Expose()
  langISO_639_1: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  authorId: string;

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.MISC.JOB.TAG.MAX_TAGS)
  @IsString({ each: true })
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.TAG.MAX, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) =>
      item?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.TAG.MAX)
    )
  )
  @Expose()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsHexColor()
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.BG_COLOR.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.BG_COLOR.MAX)
  )
  @Expose()
  bgColor: string;

  @IsNotEmpty()
  @IsHexColor()
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.TEXT_COLOR.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.TEXT_COLOR.MAX)
  )
  @Expose()
  textColor: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MAX)
  )
  @Expose()
  shortName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MAX)
  )
  @Expose()
  content: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MAX)
  )
  @Expose()
  teaserText: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  teaserImageId: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;

  @Type(() => JobMiscDataCreateRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(2)
  @ValidateNested()
  @Expose()
  translations: JobMiscDataCreateRequestDto[];
}
