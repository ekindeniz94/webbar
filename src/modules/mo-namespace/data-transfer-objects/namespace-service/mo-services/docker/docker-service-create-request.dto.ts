import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DockerTemplateDto } from '../../../../../mo-core/data-transfer-objects/docker-template.dto';
import { NamespaceServiceCreateRequestDto } from '../../namespace-service-create-request.dto';

export class NamespaceServiceDockerCreateRequestDto extends NamespaceServiceCreateRequestDto {
  @IsOptional()
  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;
}
