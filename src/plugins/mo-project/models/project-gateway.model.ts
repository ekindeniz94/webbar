import { IProjectGatewayData } from '../interfaces';
import { ProjectTypeEnum } from '../enums';
import { ProjectModel } from './project.model';

export class ProjectGatewayModel extends ProjectModel {
  protected readonly _projectType: ProjectTypeEnum.GATEWAY = ProjectTypeEnum.GATEWAY;

  /**
   *
   * @param {IProjectGatewayData} data
   */
  constructor(data: IProjectGatewayData) {
    super(data);
  }

  /**
   * @return {ProjectTypeEnum.ANGULAR}
   */
  get projectType(): ProjectTypeEnum.GATEWAY {
    return this._projectType;
  }

  /**
   * @return {IProjectGatewayData}
   */
  get serialize(): IProjectGatewayData {
    return {
      ...super.getSerialize(),
      projectType: this._projectType
    };
  }
}
