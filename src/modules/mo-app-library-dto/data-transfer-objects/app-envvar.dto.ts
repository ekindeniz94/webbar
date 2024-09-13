import { ProjectNamespaceServiceContainerEnvVarDto } from '../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-envvar.dto';
import { Expose } from 'class-transformer';

export class AppEnvVarDto extends ProjectNamespaceServiceContainerEnvVarDto {
  // TODO REMOEV AFTER MIGRATION
  @Expose()
  valueTemp: any;
}
