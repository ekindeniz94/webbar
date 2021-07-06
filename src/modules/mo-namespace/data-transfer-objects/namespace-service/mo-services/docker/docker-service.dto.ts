import { Expose } from 'class-transformer';
import { DockerTemplateDto } from '../../../../../mo-core/data-transfer-objects/docker-template.dto';
import { NamespaceServiceDto } from '../../namespace-service.dto';

export class NamespaceServiceDockerDto extends NamespaceServiceDto {
  @Expose()
  dockerfileName: string;

  @Expose()
  template: DockerTemplateDto;

  get isTemplated(): boolean {
    if (this.template) {
      return true;
    }
    return false;
  }
}
