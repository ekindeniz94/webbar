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
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.MISC.DOCU.NAV.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCU.NAV.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.BLOG.TITLE.MAX)
  )
  @Expose()
  title: String;

  // Nav-Childs : Optional
  @Type(() => String)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  subNavIds: String[];

  // Document-Childs : Optional
  @Type(() => String)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  documentIds: String[];

  // tags
  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.MISC.DOCU.NAV.TAGS.MAX)
  @IsString({ each: true })
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCU.NAV.TAGS.MAX, {
    each: true
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) =>
      item?.substring(0, DTO_VALIDATION_CONST.MISC.DOCU.NAV.TAGS.MAX)
    )
  )
  @Expose()
  tags: String[];
}
