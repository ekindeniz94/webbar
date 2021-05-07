import { JobMiscDataCreateRequestDto } from './job-misc-data-create-request.dto';
import {
  ArrayMaxSize,
  isArray,
  IsBoolean,
  isBoolean,
  IsHexColor,
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

export class JobMiscDataPatchRequestDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? 'en')
  @Expose()
  langISO_639_1: string;

  @IsOptional()
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

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @IsHexColor()
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.BG_COLOR.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.BG_COLOR.MAX)
  )
  @Expose()
  bgColor: string;

  @IsOptional()
  @IsHexColor()
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.TEXT_COLOR.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.TEXT_COLOR.MAX)
  )
  @Expose()
  textColor: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.SHORT_NAME.MAX)
  )
  @Expose()
  shortName: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.CONTENT.MAX)
  )
  @Expose()
  content: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.JOB.TEASER_TEXT.MAX)
  )
  @Expose()
  teaserText: string;

  @IsOptional()
  @IsString()
  @Expose()
  teaserImageId: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsOptional()
  @IsBoolean()
  @Expose()
  published: boolean;

  @Type(() => JobMiscDataPatchRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(2)
  @ValidateNested()
  @Expose()
  translations: JobMiscDataPatchRequestDto[];
}
