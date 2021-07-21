import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { NamespaceServiceDockerCreateRequestDto } from '../docker';
import { DockerTemplateDto } from '../../../../../mo-core';

export class NamespaceServiceDockerTemplateServiceCreateRequestDto extends NamespaceServiceDockerCreateRequestDto {
  @IsOptional()
  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;
}
