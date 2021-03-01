import { ProjectRolloutStrategyEnum, ProjectTypeEnum } from '../enums';

export const DEFAULT_PROJECT_DATA: IProjectData = {
  /**
   * Auto-created on init
   */
  id: 'AUTO_CREATED_UUID',
  /**
   * required variables
   */
  name: 'REQUIRED',
  projectType: ProjectTypeEnum.GATEWAY,
  domain: 'mogenius.com',
  namespace: `AUTO_CREATED_UUID`,
  users: [],
  /**
   * optional variables
   */
  build: true,
  deploy: true,
  rolloutStrategy: ProjectRolloutStrategyEnum.RECREATE,
  createdAt: Date.now(),
  oauthClientId: 'clientId',
  oauthClientSecret: 'clientSecret',
  replicas: 1,
  ephemeralStorageLimit: '300Mi',
  memoryLimit: '128Mi',
  cpuLimit: '100m',
  ephemeralStorageRequest: '50Mi',
  memoryRequest: '32Mi',
  cpuRequest: '10m',
  repoSize: 0,
  buildSize: 0,
  deploymentSize: 0,
  containerPort: 1337,
  containerTemplateId: null
};

export interface IProjectData {
  /**
   * Auto-created on init
   */
  id?: string;
  /**
   * required variables
   */
  name: string;
  projectType: ProjectTypeEnum;
  domain: string;
  namespace: string;
  users: string[];
  /**
   * optional variables
   */
  build?: boolean;
  deploy?: boolean;
  rolloutStrategy?: ProjectRolloutStrategyEnum;
  createdAt?: number;
  oauthClientId?: string;
  oauthClientSecret?: string;
  replicas?: number;
  ephemeralStorageLimit?: string;
  memoryLimit?: string;
  cpuLimit?: string;
  ephemeralStorageRequest?: string;
  memoryRequest?: string;
  cpuRequest?: string;
  repoSize?: number;
  buildSize?: number;
  deploymentSize?: number;
  containerPort?: number;
  containerTemplateId?: string | null;
}
