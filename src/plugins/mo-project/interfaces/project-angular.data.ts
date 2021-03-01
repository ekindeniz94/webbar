import { IProjectData } from './project.data';
import { IProjectAngularConfigData } from './project-angular-config.data';
import { ProjectTypeEnum } from '../enums';

export interface IProjectAngularData extends IProjectData {
  projectType: ProjectTypeEnum.ANGULAR;
  config?: IProjectAngularConfigData;
}
