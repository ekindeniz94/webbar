import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { NamespaceServiceEnvVarCreateRequestDto } from '../../mo-namespace';
import { DTO_VALIDATION_CONST } from '../../mo-core';

export class AppEnvVarCreateRequestDto extends NamespaceServiceEnvVarCreateRequestDto {
  @IsOptional()
  @IsString()
  @ValidateIf(({ value }) => value.length > 0) // expected to allow empty string by skipping @IsUrl
  // @Matches(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_VALUE.MATCHES)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_VALUE.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_VALUE.MIN)
  // @StripTags()
  @Expose()
  value: string;
}
