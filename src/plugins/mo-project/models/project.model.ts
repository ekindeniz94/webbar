import deepmerge from 'deepmerge';
import { isObject } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { ProjectRolloutStrategyEnum, ProjectTypeEnum } from '../enums';
import { DEFAULT_PROJECT_DATA, IProjectData } from '../interfaces';
import { ProjectDataType } from '../types';

export abstract class ProjectModel {
  protected abstract readonly _projectType: ProjectTypeEnum;
  
  protected _id: string;
  protected _name: string;
  protected _domain: string;
  protected _rolloutStrategy: ProjectRolloutStrategyEnum;
  protected _namespace: string;
  protected _createdAt: number;
  protected _build: boolean;
  protected _deploy: boolean;
  protected _users: string[];
  protected _oauthClientId: string;
  protected _oauthClientSecret: string;
  protected _replicas: number;
  protected _ephemeralStorageLimit: string;
  protected _memoryLimit: string;
  protected _cpuLimit: string;
  protected _ephemeralStorageRequest: string;
  protected _memoryRequest: string;
  protected _cpuRequest: string;
  protected _repoSize: number;
  protected _buildSize: number;
  protected _deploymentSize: number;
  protected _containerPort: number;
  protected _containerTemplateId: string;

  protected constructor(data: IProjectData) {
    data = deepmerge(DEFAULT_PROJECT_DATA, data);

    if (data && isObject(data)) {
      try {
        data = JSON.parse(JSON.stringify(data));
      } catch (err) {
        console.log(err);
        data = {} as any;
      }
    }

    this._id = data.id ?? uuidv4();
    this._name = data.name;

    this._namespace = data.namespace ?? `${this._name}-${uuidv4()}`;
    this._createdAt = data.createdAt ?? Date.now();
    this._domain = data.domain ?? DEFAULT_PROJECT_DATA.domain!;
    this._rolloutStrategy = data?.rolloutStrategy ?? DEFAULT_PROJECT_DATA.rolloutStrategy!;
    this._build = data.build ?? DEFAULT_PROJECT_DATA.build!;
    this._deploy = data.deploy ?? DEFAULT_PROJECT_DATA.deploy!;
    this._users = data.users ?? DEFAULT_PROJECT_DATA.users!;
    this._oauthClientId = data.oauthClientId ?? DEFAULT_PROJECT_DATA.oauthClientId!;
    this._oauthClientSecret = data.oauthClientSecret ?? DEFAULT_PROJECT_DATA.oauthClientSecret!;
    this._replicas = data.replicas ?? DEFAULT_PROJECT_DATA.replicas!;
    this._ephemeralStorageLimit = data.ephemeralStorageLimit ?? DEFAULT_PROJECT_DATA.ephemeralStorageLimit!;
    this._memoryLimit = data.memoryLimit ?? DEFAULT_PROJECT_DATA.memoryLimit!;
    this._cpuLimit = data.cpuLimit ?? DEFAULT_PROJECT_DATA.cpuLimit!;
    this._ephemeralStorageRequest = data.ephemeralStorageRequest ?? DEFAULT_PROJECT_DATA.ephemeralStorageRequest!;
    this._memoryRequest = data.memoryRequest ?? DEFAULT_PROJECT_DATA.memoryRequest!;
    this._cpuRequest = data.cpuRequest ?? DEFAULT_PROJECT_DATA.cpuRequest!;
    this._repoSize = data.repoSize ?? DEFAULT_PROJECT_DATA.repoSize!;
    this._buildSize = data.buildSize ?? DEFAULT_PROJECT_DATA.buildSize!;
    this._deploymentSize = data.deploymentSize ?? DEFAULT_PROJECT_DATA.deploymentSize!;
    this._containerPort = data.containerPort ?? DEFAULT_PROJECT_DATA.containerPort!;
    this._containerTemplateId = data.containerTemplateId ?? DEFAULT_PROJECT_DATA.containerTemplateId!;

    // Checking data variable
    for (const key in data) {
      const value = (this as any)[`_${key}`];
      if (!value) {
        continue;
      }
      if (value === 'REQUIRED') {
        console.log(`Project-Data parameter "${key}" is required!`);
        const createdValue = `AUTO_CREATED_NAME-${uuidv4()}`;
        (this as any)[`_${key}`] = createdValue;
        console.log(`Auto created "${key}" [${createdValue}]`);
        continue;
      }
      if (value === 'AUTO_CREATED_UUID') {
        const createdValue = uuidv4();
        (this as any)[`_${key}`] = uuidv4();
        console.log(`Auto created "${key}" [${createdValue}]`);
      }
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get domain(): string {
    return this._domain;
  }

  get rolloutStrategy(): ProjectRolloutStrategyEnum {
    return this._rolloutStrategy;
  }

  get namespace(): string {
    return this._namespace;
  }

  abstract get projectType(): ProjectTypeEnum;

  get createdAt(): number {
    return this._createdAt;
  }

  get build(): boolean {
    return this._build;
  }

  get deploy(): boolean {
    return this._deploy;
  }

  get users(): string[] {
    return this._users;
  }

  get oauthClientId(): string {
    return this._oauthClientId;
  }

  get oauthClientSecret(): string {
    return this._oauthClientSecret;
  }

  get replicas(): number {
    return this._replicas;
  }

  get ephemeralStorageLimit(): string {
    return this._ephemeralStorageLimit;
  }

  get memoryLimit(): string {
    return this._memoryLimit;
  }

  get cpuLimit(): string {
    return this._cpuLimit;
  }

  get ephemeralStorageRequest(): string {
    return this._ephemeralStorageRequest;
  }

  get memoryRequest(): string {
    return this._memoryRequest;
  }

  get cpuRequest(): string {
    return this._cpuRequest;
  }

  get repoSize(): number {
    return this._repoSize;
  }

  get buildSize(): number {
    return this._buildSize;
  }

  get deploymentSize(): number {
    return this._deploymentSize;
  }

  set repoSize(value: number) {
    this._repoSize = value;
  }

  set buildSize(value: number) {
    this._buildSize = value;
  }

  set deploymentSize(value: number) {
    this._deploymentSize = value;
  }

  get containerPort(): number {
    return this._containerPort;
  }

  set containerPort(value: number) {
    this._containerPort = value;
  }

  get containerTemplateId(): string {
    return this._containerTemplateId;
  }

  set containerTemplateId(value: string) {
    this._containerTemplateId = value;
  }


  protected getSerialize(): IProjectData {
    return {
      id: this._id,
      name: this._name,
      domain: this._domain,
      projectType: this.projectType,
      rolloutStrategy: this._rolloutStrategy,
      namespace: this._namespace,
      createdAt: this._createdAt,
      build: this._build,
      deploy: this._deploy,
      users: this._users,
      oauthClientId: this._oauthClientId,
      oauthClientSecret: this._oauthClientSecret,
      replicas: this._replicas,
      ephemeralStorageLimit: this._ephemeralStorageLimit,
      memoryLimit: this._memoryLimit,
      cpuLimit: this._cpuLimit,
      ephemeralStorageRequest: this._ephemeralStorageRequest,
      memoryRequest: this._memoryRequest,
      cpuRequest: this._cpuRequest,
      repoSize: this._repoSize,
      buildSize: this._buildSize,
      deploymentSize: this._deploymentSize,
      containerPort: this._containerPort,
      containerTemplateId: this.containerTemplateId
    };
  }

  abstract get serialize(): ProjectDataType;
}
