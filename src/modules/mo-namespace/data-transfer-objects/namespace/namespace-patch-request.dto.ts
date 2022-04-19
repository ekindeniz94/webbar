import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '../../../../utils';

export class NamespacePatchRequestDto {
  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.DISPLAY_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.DISPLAY_NAME.MAX)
  @StripTags()
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.DESCRIPTION.MAX)
  @StripTags()
  @Expose()
  description: string;
}
