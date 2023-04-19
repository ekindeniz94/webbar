import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums/project-namespace-service-envvar-type.enum';

export class K8sEnvVarDto {
  @Expose()
  name: string;

  @Expose()
  value: string;

  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;
}
