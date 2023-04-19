import { IsNotEmpty, IsOptional, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';

export class NamespaceStageCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.STAGE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.STAGE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      PROJECT_CONST.STAGE.DISPLAY_NAME.MAX
    )
  )
  @StripTags()
  @Expose()
  displayName: string;

  // @IsNotEmpty()
  // @IsString()
  // @MinLength(PROJECT_CONST.STAGE.NAME.MIN)
  // @MaxLength(PROJECT_CONST.STAGE.NAME.MAX)
  // @Matches(PROJECT_CONST.STAGE.NAME.MATCHES, {
  //   message: '$property must conform to: a-z or 0-9 ;min 6, max 6 char'
  // })
  // @StripTags()
  // @Expose()
  // name: string;
  //
  // @IsNotEmpty()
  // @IsString()
  // @Matches(PROJECT_CONST.STAGE.SUBDOMAIN.MATCHES, {
  //   message: '$property must conform to: a-z or A-Z or 0-9 or - or _ ;min 6, max 30 char'
  // })
  // @StripTags()
  // @Expose()
  // subdomain: string;

  @IsOptional()
  @IsString()
  @MaxLength(PROJECT_CONST.STAGE.DESCRIPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      PROJECT_CONST.STAGE.DESCRIPTION.MAX
    )
  )
  @StripTags()
  @Expose()
  description: string;
}
