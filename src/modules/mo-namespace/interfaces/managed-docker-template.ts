import { IManagedDockerService } from './managed-docker-service';

export interface IManagedDockerTemplate {
  id: string;
  name: string;
  dockerTemplateServices: IManagedDockerService[];
}
