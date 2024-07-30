import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { ProjectNamespaceServicePortCreateRequestDto } from './project-namespace-service-port-create-request.dto';

export class ProjectNamespaceServicePortPatchRequestDto extends ProjectNamespaceServicePortCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id?: string | undefined;
}
