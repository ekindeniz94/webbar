import { ProjectNamespaceServiceContainerEnvVarDto } from '../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-env-var.dto';
import { Exclude } from 'class-transformer';

export class AppEnvVarDto extends ProjectNamespaceServiceContainerEnvVarDto {
  @Exclude()
  id: string;

  @Exclude()
  createdAt: string | Date;

  @Exclude()
  updatedAt: string | Date;
}
