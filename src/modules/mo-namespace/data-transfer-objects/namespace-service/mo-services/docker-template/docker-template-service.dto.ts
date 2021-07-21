import { Expose } from 'class-transformer';
import { DockerTemplateDto } from '../../../../../mo-core';
import { NamespaceServiceDockerDto } from '../docker';

export class NamespaceServiceDockerTemplateServiceDto extends NamespaceServiceDockerDto {
  @Expose()
  template: DockerTemplateDto;

  get isTemplated(): boolean {
    if (this.template) {
      return true;
    }
    return false;
  }
}
