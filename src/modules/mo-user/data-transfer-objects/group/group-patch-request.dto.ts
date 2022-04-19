import { IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '../../../../utils';

export class GroupPatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.GROUP.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.GROUP.NAME.MAX)
  )
  @StripTags()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.GROUP.DESCRIPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.GROUP.DESCRIPTION.MAX)
  )
  @StripTags()
  @Expose()
  description: string;
}
