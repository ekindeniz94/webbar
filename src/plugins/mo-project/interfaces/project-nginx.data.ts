import { IProjectData } from './project.data';
import { ProjectTypeEnum } from '../enums';

export interface IProjectNginxData extends IProjectData {
  projectType: ProjectTypeEnum.NGINX;
}
