import { NamespaceServiceDockerServiceK8sPatchRequestDto } from '../docker/docker-service-k8s-patch-request.dto';
import { IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { DockerTemplateDto } from '../../../../../mo-core';

export class NamespaceServiceDockerTemplateServiceK8sPatchRequestDto extends NamespaceServiceDockerServiceK8sPatchRequestDto {
  @IsOptional()
  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;
}
