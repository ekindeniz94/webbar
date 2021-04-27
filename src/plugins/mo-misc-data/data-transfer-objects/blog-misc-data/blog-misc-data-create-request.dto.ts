import {
  ArrayMaxSize,
  isArray, isBoolean,
  IsBoolean,
  IsHexColor,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import * as _ from 'lodash';

export class BlogMiscDataCreateRequestDto {

  @IsOptional()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(128, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) => item?.substring(0, 128))
  )
  @Expose()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => value?.substring(0, 512))
  @Expose()
  topic: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => value?.substring(0, 512))
  @Expose()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(512000)
  @Transform(({ value }) => value?.substring(0, 512000))
  @Expose()
  content: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(256000)
  @Transform(({ value }) => value?.substring(0, 256000))
  @Expose()
  teaserText: string;

  // @IsNotEmpty()
  @IsOptional()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => value?.substring(0, 512))
  @Expose()
  teaserImage: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 64))
  @Expose()
  authorId: string;

  @IsNotEmpty()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(64, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) => item?.substring(0, 64))
  )
  @Expose()
  groups: string[];
}
