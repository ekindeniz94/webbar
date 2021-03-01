import { ProjectAngularModel, ProjectDockerModel, ProjectGatewayModel, ProjectNginxModel } from '../models';

export type ProjectType = ProjectGatewayModel | ProjectNginxModel | ProjectAngularModel | ProjectDockerModel;
