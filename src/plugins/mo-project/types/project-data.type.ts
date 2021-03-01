import { IProjectAngularData, IProjectDockerData, IProjectGatewayData, IProjectNginxData } from '../interfaces';

export type ProjectDataType = IProjectGatewayData | IProjectNginxData | IProjectAngularData | IProjectDockerData;
