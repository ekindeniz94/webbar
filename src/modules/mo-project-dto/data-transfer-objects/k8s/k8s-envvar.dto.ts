import { Expose } from 'class-transformer';
import { ProjectEnvVarTypeEnum } from '../../enums/project-envvar-type.enum';

export class K8sEnvVarDto {
  @Expose()
  name: string;

  @Expose()
  value: string;

  @Expose()
  type: ProjectEnvVarTypeEnum;
}
