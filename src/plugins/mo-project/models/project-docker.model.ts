import { ProjectTypeEnum } from '../enums';
import { IProjectDockerData } from '../interfaces';
import { ProjectModel } from './project.model';

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
  public getSerialized(): IProjectDockerData {
    return {
      ...super.getSerialized(),
      projectType: this._projectType
    };
  }
}
