import { IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { DockerTemplateDto } from '../../../../../mo-core';
import { NamespaceServiceDockerK8sPatchRequestDto } from '../docker';

export class NamespaceServiceDockerTemplateK8sPatchRequestDto extends NamespaceServiceDockerK8sPatchRequestDto {
  @IsOptional()
  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;
}
