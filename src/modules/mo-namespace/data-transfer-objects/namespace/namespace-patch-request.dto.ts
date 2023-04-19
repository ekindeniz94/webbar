import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';

export class NamespacePatchRequestDto {
  @IsOptional()
  @IsString()
  @MinLength(PROJECT_CONST.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.DISPLAY_NAME.MAX)
  @StripTags()
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @MaxLength(PROJECT_CONST.DESCRIPTION.MAX)
  @StripTags()
  @Expose()
  description: string;
}
