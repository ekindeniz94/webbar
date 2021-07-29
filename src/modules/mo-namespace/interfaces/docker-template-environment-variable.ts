import { NamespaceServiceEnvVarTypeEnum } from '../index';

export interface IDockerTemplateEnvironmentVariable {
  name: string;
  value: string;
  type: NamespaceServiceEnvVarTypeEnum;
  deactivateName?: boolean;
  deactivateValue?: boolean;
  deactivateType?: boolean;
  deactivateDelete?: boolean;
  dependsOn?: string;
  dependsOnMethod?: string;
}
