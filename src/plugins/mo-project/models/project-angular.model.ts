import { MoStringUtil } from '@mo/mo-gateway-core';
import { isBoolean, isObject, isString } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { ProjectTypeEnum } from '../enums';
import { DEFAULT_PROJECT_ANGULAR_CONFIG, IProjectAngularConfigData, IProjectAngularData } from '../interfaces';
import { ProjectModel } from './project.model';

export class ProjectAngularModel extends ProjectModel {
  protected readonly _projectType: ProjectTypeEnum.ANGULAR = ProjectTypeEnum.ANGULAR;

  protected _config: IProjectAngularConfigData;

  /**
   *
   * @param {IProjectAngularData} data
   */
  constructor(data: IProjectAngularData) {
    super(data);
    // Init config
    this._config = DEFAULT_PROJECT_ANGULAR_CONFIG;
    if (data.config && isObject(data.config)) {
      for (const key in DEFAULT_PROJECT_ANGULAR_CONFIG) {
        if (!DEFAULT_PROJECT_ANGULAR_CONFIG.hasOwnProperty(key) || !data?.config?.hasOwnProperty(key)) {
          continue;
        }
        (this._config as any)[key] = (data.config as any)[key];
      }
    }

    this._config.skipGit = DEFAULT_PROJECT_ANGULAR_CONFIG.skipGit;
    this._config.skipInstall = DEFAULT_PROJECT_ANGULAR_CONFIG.skipInstall;
    this._config.skipTests = DEFAULT_PROJECT_ANGULAR_CONFIG.skipTests;
    this._config.verbose = DEFAULT_PROJECT_ANGULAR_CONFIG.verbose;
    this._config.packageManager = DEFAULT_PROJECT_ANGULAR_CONFIG.packageManager;

    // Checking config variable
    for (const key in this._config) {
      const value = (this._config as any)[key];
      if (!value) {
        continue;
      }
      if (value === 'REQUIRED') {
        console.log(`Project-Data parameter "${key}" is required!`);
        const createdValue = `AUTO_CREATED_NAME-${uuidv4()}`;
        (this._config as any)[`${key}`] = createdValue;
        console.log(`Auto created "${key}" [${createdValue}]`);
        continue;
      }
      if (value === 'AUTO_CREATED_UUID') {
        const createdValue = uuidv4();
        (this._config as any)[`${key}`] = uuidv4();
        console.log(`Auto created "${key}" [${createdValue}]`);
      }
    }
  }

  /**
   * @return {IProjectAngularConfigData}
   */
  get config(): IProjectAngularConfigData {
    return this._config;
  }

  /**
   * @return {string}
   */
  get configString(): string {
    const resultArr = [];
    for (const key in this._config) {
      if (!this._config.hasOwnProperty(key)) {
        continue;
      }
      const value = (this._config as any)[key];
      if (value === undefined && (!isBoolean(value) || !isString(value) || value === '')) {
        continue;
      }
      resultArr.push(`--${MoStringUtil.toKebabCase(key)}=${value}`);
    }

    return resultArr.join(' ');
  }

  /**
   * @return {ProjectTypeEnum.ANGULAR}
   */
  get projectType(): ProjectTypeEnum.ANGULAR {
    return this._projectType;
  }

  /**
   * @return {IProjectAngularData}
   */
  public get serialize(): IProjectAngularData {
    return {
      ...super.getSerialize(),
      projectType: this._projectType,
      config: this._config
    };
  }
}
