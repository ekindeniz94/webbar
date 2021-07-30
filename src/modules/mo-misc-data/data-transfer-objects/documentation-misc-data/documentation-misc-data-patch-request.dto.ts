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
  // Next ID
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @Expose()
  nextId: string;

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
}
