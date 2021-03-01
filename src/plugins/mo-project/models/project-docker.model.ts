import { ProjectTypeEnum } from '../enums';
import { ProjectModel } from './project.model';
import { IProjectDockerData } from '../interfaces';

export class ProjectDockerModel extends ProjectModel {
  protected readonly _projectType: ProjectTypeEnum.DOCKER = ProjectTypeEnum.DOCKER;

  /**
   *
   * @param {IProjectGatewayData} data
   */
  constructor(data: IProjectDockerData) {
    super(data);
  }

  /**
   * @return {ProjectTypeEnum.ANGULAR}
   */
  get projectType(): ProjectTypeEnum.DOCKER {
    return this._projectType;
  }

  /**
   * @return {IProjectGatewayData}
   */
  get serialize(): IProjectDockerData {
    return {
      ...super.getSerialize(),
      projectType: this._projectType
    };
  }
}
