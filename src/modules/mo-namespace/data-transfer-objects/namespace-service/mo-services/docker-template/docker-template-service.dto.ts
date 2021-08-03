import { Expose, Type } from 'class-transformer';
import { DockerTemplateDto } from '../../../../../mo-core';
import { NamespaceServiceDockerDto } from '../docker';

export class NamespaceServiceDockerTemplateDto extends NamespaceServiceDockerDto {
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
