import { IProjectData } from './project.data';
import { ProjectTypeEnum } from '../enums';

export interface IProjectGatewayData extends IProjectData {
  projectType: ProjectTypeEnum.GATEWAY;
}
