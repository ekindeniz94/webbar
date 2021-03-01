import { ProjectTypeEnum } from '../enums';
import { IProjectData } from './project.data';

export interface IProjectDockerData extends IProjectData {
  projectType: ProjectTypeEnum.DOCKER;
}
