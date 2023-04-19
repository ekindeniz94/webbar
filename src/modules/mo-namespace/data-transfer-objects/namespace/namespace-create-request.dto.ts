import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core/constantes/data-length.const';
import { IsInStringList } from '../../../mo-core/validation-decorators/is-in-string-list.validator';
import { MoUtils, StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';

export class NamespaceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.NAME.MIN)
  @MaxLength(PROJECT_CONST.NAME.MAX)
  @Matches(PROJECT_CONST.NAME.MATCHES, {
    message: '$property must conform to: a-z or 0-9 or - ;min 4, max 14 char'
  })
  @StripTags()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.DISPLAY_NAME.MAX)
  @StripTags()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SHORT_ID.MIN)
  @MaxLength(PROJECT_CONST.SHORT_ID.MAX)
  @Matches(PROJECT_CONST.SHORT_ID.MATCHES, {
    message: '$property must conform to: a-z or 0-9 ;min 6, max 6 char'
  })
  @Transform(({ value }) => value ?? MoUtils.nanoidSuperShort())
  @StripTags()
  @Expose()
  shortId: string;

  @IsNotEmpty()
  @IsString()
  @Matches(PROJECT_CONST.NAME.MATCHES, {
    message: '$property must conform to: a-z or 0-9 or - ;min 4, max 25 char'
  })
  @StripTags()
  @Expose()
  hostname: string;

  @IsNotEmpty()
  @IsString()
  @IsInStringList(DTO_VALIDATION_CONST.MO_USER_DOMAINS)
  @StripTags()
  @Expose()
  domain: string;

  @IsOptional()
  @IsString()
  @MaxLength(PROJECT_CONST.DESCRIPTION.MAX)
  @StripTags()
  @Expose()
  description: string;

  @IsOptional()
  @MaxLength(PROJECT_CONST.ICON.MAX)
  @StripTags()
  @Expose()
  icon: string;
}
