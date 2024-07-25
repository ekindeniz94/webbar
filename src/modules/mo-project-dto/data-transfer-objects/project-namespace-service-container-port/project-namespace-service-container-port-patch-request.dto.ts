import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { ProjectNamespaceServiceContainerPortCreateRequestDto } from './project-namespace-service-container-port-create-request.dto';

export class ProjectNamespaceServiceContainerPortPatchRequestDto extends ProjectNamespaceServiceContainerPortCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id?: string | undefined;
}
