import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { NamespaceServiceEnvVarCreateRequestDto } from '../../mo-namespace';
import { DTO_VALIDATION_CONST } from '../../mo-core';
import { PROJECT_CONST } from '../../mo-project-dto';

export class AppEnvVarCreateRequestDto extends NamespaceServiceEnvVarCreateRequestDto {
  @IsOptional()
  @IsString()
  @ValidateIf(({ value }) => value.length > 0) // expected to allow empty string by skipping @IsUrl
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MATCHES)
  @MaxLength(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MAX)
  @MinLength(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MIN)
  // @StripTags()
  @Expose()
  value: string;
}
