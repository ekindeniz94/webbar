import { BlogMiscDataCreateRequestDto } from './blog-misc-data-create-request.dto';
import {
  ArrayMaxSize,
  isArray,
  IsBoolean,
  isBoolean,
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

export class BlogMiscDataPatchRequestDto {
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
  @ArrayMaxSize(DTO_VALIDATION_CONST.MISC.BLOG.TAG.MAX_TAGS)
  @IsString({ each: true })
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.TAG.MAX, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) =>
      item?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TAG.MAX)
    )
  )
  @Expose()
  tags: string[];

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.TOPIC.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TOPIC.MAX)
  )
  @Expose()
  topic: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  )
  @Expose()
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.BLOG.CONTENT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.CONTENT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.CONTENT.MAX)
  )
  @Expose()
  content: string;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.BLOG.TEASER_TEXT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.TEASER_TEXT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TEASER_TEXT.MAX)
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

  @Type(() => BlogMiscDataPatchRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(2)
  @ValidateNested()
  @Expose()
  translations: BlogMiscDataPatchRequestDto[];
}
