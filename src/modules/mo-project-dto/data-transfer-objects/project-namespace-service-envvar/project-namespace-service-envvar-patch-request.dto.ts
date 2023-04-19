import { IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mo/js-utils';
import { ProjectNamespaceServiceEnvvarCreateRequestDto } from './project-namespace-service-envvar-create-request.dto';

export class ProjectNamespaceServiceEnvvarPatchRequestDto extends ProjectNamespaceServiceEnvvarCreateRequestDto {
  @IsOptional()
  @StripTags()
  @Expose()
  id: string;
}
