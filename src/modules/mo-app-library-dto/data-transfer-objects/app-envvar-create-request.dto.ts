import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { PROJECT_CONST, ProjectNamespaceServiceEnvvarCreateRequestDto } from '../../mo-project-dto';

export class AppEnvVarCreateRequestDto extends ProjectNamespaceServiceEnvvarCreateRequestDto {
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
