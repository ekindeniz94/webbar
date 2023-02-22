import { NamespaceServiceEnvVarCreateRequestDto } from './namespace-service-envvar-create-request.dto';
import { IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mo/js-utils';

export class NamespaceServiceEnvVarPatchRequestDto extends NamespaceServiceEnvVarCreateRequestDto {
  @IsOptional()
  @StripTags()
  @Expose()
  id: string;
}
