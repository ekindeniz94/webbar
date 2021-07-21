import { Expose, Type } from 'class-transformer';
import { NamespaceServiceDto } from '../../namespace-service.dto';
import { DockerTemplateDto } from '../../../../../mo-core';

export class NamespaceServiceDockerDto extends NamespaceServiceDto {
  @Expose()
  dockerfileName: string;

  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;

  get isTemplated(): boolean {
    if (this.template) {
      return true;
    }
    return false;
  }
}
