import { NamespaceServiceEnvVarTypeEnum2 } from '../index';

export interface IDockerTemplateEnvironmentVariable {
  name: string;
  value: string;
  type: NamespaceServiceEnvVarTypeEnum2;
  deactivateName?: boolean;
  deactivateValue?: boolean;
  deactivateType?: boolean;
  deactivateDelete?: boolean;
  dependsOn?: string;
  dependsOnMethod?: string;
}
