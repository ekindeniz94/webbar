import { DocumentationMiscDataDto } from '../documentation-misc-data/documentation-misc-data.dto';
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
import { DTO_VALIDATION_CONST } from 'src/mo-core-base';
import _ from 'lodash';

export class DocumentationNavMiscDataPatchRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @Type(() => DocumentationMiscDataDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  sublink: DocumentationMiscDataDto[];

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
}
