import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { ProjectNamespaceServiceContainerEnvvarCreateRequestDto } from '../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-envvar-create-request.dto';
import { PROJECT_CONST } from '../../mo-project-dto/mo-project-dto.const';

export class AppEnvVarCreateRequestDto extends ProjectNamespaceServiceContainerEnvvarCreateRequestDto {
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
