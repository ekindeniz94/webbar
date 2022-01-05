import { IsNotEmpty, IsOptional, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { Expose, Transform } from 'class-transformer';

export class NamespaceStageCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.STAGE.DISPLAY_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.STAGE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.STAGE.DISPLAY_NAME.MAX
    )
  )
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.STAGE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.STAGE.NAME.MAX)
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.STAGE.NAME.MATCHES, {
    message: '$property must conform to: a-z or 0-9 ;min 6, max 6 char'
  })
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.STAGE.SUBDOMAIN.MATCHES, {
    message: '$property must conform to: a-z or A-Z or 0-9 or - or _ ;min 6, max 30 char'
  })
  @Expose()
  subdomain: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.STAGE.DESCRIPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.STAGE.DESCRIPTION.MAX
    )
  )
  @Expose()
  description: string;
}
