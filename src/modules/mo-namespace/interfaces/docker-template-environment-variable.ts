import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../mo-project-dto';

export interface IDockerTemplateEnvironmentVariable {
  name: string;
  value: string;
  type: ProjectNamespaceServiceEnvVarTypeEnum;
  deactivateName?: boolean;
  deactivateValue?: boolean;
  deactivateType?: boolean;
  deactivateDelete?: boolean;
  // dependsOn?: string;
  // dependsOnMethod?: string;
}
