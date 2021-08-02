import { Transform, Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  ValidateNested,
  ArrayMaxSize,
  isString,
  isArray
} from 'class-validator';
import _ from 'lodash';
import { DTO_VALIDATION_CONST } from 'src/modules';

export class DocuNavMiscDataCreateRequestDto {
  // Nav Title
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  )
  @Expose()
  title: string;

  // Nav-Childs : Optional
  @IsOptional()
  @Type(() => String)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  subNavIds: string[];

  // Document-Childs : Optional
  @IsOptional()
  @Type(() => String)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  documentIds: string[];

  // tags
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
}
