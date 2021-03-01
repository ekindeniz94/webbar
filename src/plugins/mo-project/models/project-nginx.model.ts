import { IProjectNginxData } from '../interfaces';
import { ProjectTypeEnum } from '../enums';
import { ProjectModel } from './project.model';

export class ProjectNginxModel extends ProjectModel {
  protected readonly _projectType: ProjectTypeEnum.NGINX = ProjectTypeEnum.NGINX;

  /**
   *
   * @param {IProjectNginxData} data
   */
  constructor(data: IProjectNginxData) {
    super(data);
  }

  /**
   * @return {ProjectTypeEnum.NGINX}
   */
  get projectType(): ProjectTypeEnum.NGINX {
    return this._projectType;
  }

  /**
   * @return {IProjectNginxData}
   */
  get serialize(): IProjectNginxData {
    return {
      ...super.getSerialize(),
      projectType: this._projectType
    };
  }
}
