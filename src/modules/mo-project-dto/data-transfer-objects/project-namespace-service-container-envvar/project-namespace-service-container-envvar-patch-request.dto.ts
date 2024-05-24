import { IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mo/js-utils';
import { ProjectNamespaceServiceContainerEnvvarCreateRequestDto } from './project-namespace-service-container-envvar-create-request.dto';

export class ProjectNamespaceServiceContainerEnvvarPatchRequestDto extends ProjectNamespaceServiceContainerEnvvarCreateRequestDto {
  @IsOptional()
  @StripTags()
  @Expose()
  id: string;
}
