import { IDockerTemplateEnvironmentVariable } from './docker-template-environment-variable';

export interface IDockerTemplate {
  name: string;
  id: string;
  version: string;
  description: string;
  folder: string;
  lastUpdate: string;
  internalPort?: number;
  expose: boolean;
  envVars?: IDockerTemplateEnvironmentVariable[];
}
