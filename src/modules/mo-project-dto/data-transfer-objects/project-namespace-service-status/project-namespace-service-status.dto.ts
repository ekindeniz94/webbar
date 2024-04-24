import { Expose, Transform, Type } from 'class-transformer';
import {
  ProjectNamespaceServiceStatusControllerEnum,
  ProjectNamespaceServiceStatusKindEnum,
  ProjectNamespaceServiceStatusKindTypeEnum
} from '../../enums/project-namespace-service-status.enum';
import { cloneDeep } from 'lodash';
import { IsOptional, isArray } from 'class-validator';

export enum ProjectNamespaceServiceStatusMessageTypeEnum {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export enum ProjectNamespaceServiceStatusTypeEnum {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  UNKOWN = 'UNKOWN'
}

export class ProjectNamespaceServiceStatusMessage {
  @Expose()
  type: ProjectNamespaceServiceStatusMessageTypeEnum;

  @Expose()
  message: string;
}

export class EmptyTest {}

export class ProjectNamespaceServiceStatusItemDto {
  @Expose()
  kind: ProjectNamespaceServiceStatusKindTypeEnum;

  @Expose()
  name: string;

  @Expose()
  namespace: string;

  @Expose()
  @IsOptional()
  ownerName: string;

  @Expose()
  @IsOptional()
  ownerKind: ProjectNamespaceServiceStatusKindTypeEnum;

  @Expose()
  @IsOptional()
  status: ProjectNamespaceServiceStatusTypeEnum;

  @Expose()
  @IsOptional()
  messages: ProjectNamespaceServiceStatusMessage[];
}

export class ProjectNamespaceServiceStatusDto {
  @Expose()
  @Type(() => ProjectNamespaceServiceStatusItemDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  items: ProjectNamespaceServiceStatusItemDto[];

  @Expose()
  switchedOn: boolean;

  @Expose()
  hasPods: boolean;

  @Expose()
  hasContainers: boolean;

  @Expose()
  hasDeployment: boolean;

  @Expose()
  hasJob: boolean;

  @Expose()
  hasCronJob: boolean;

  @Expose()
  hasBuild: boolean;

  @Expose()
  get hasWarnings(): boolean {
    return (this.warnings?.length ?? 0) > 0;
  }

  @Expose()
  @IsOptional()
  warnings?: ProjectNamespaceServiceStatusMessage[];

  public isOk(exclude: ProjectNamespaceServiceStatusKindTypeEnum[]): boolean {
    const isNotSuspicious = (status: ProjectNamespaceServiceStatusTypeEnum) =>
      ![ProjectNamespaceServiceStatusTypeEnum.ERROR, ProjectNamespaceServiceStatusTypeEnum.WARNING].includes(status);

    let ok = true;

    if (this.hasBuild && !exclude.includes(ProjectNamespaceServiceStatusKindEnum.BuildJob)) {
      const item = this.items.find((item) => item.kind === ProjectNamespaceServiceStatusKindEnum.BuildJob);
      ok &&= isNotSuspicious(item?.status ?? ProjectNamespaceServiceStatusTypeEnum.UNKOWN);
    }

    if (this.hasDeployment && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.Deployment)) {
      const item = this.items.find((item) => item.kind === ProjectNamespaceServiceStatusControllerEnum.Deployment);
      ok &&= isNotSuspicious(item?.status ?? ProjectNamespaceServiceStatusTypeEnum.UNKOWN);
    }

    if (this.hasCronJob && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.CronJob)) {
      const item = this.items.find((item) => item.kind === ProjectNamespaceServiceStatusControllerEnum.CronJob);
      ok &&= isNotSuspicious(item?.status ?? ProjectNamespaceServiceStatusTypeEnum.UNKOWN);
    }

    if (this.hasJob && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.Job)) {
      const item = this.items.find((item) => item.kind === ProjectNamespaceServiceStatusControllerEnum.Job);
      ok &&= isNotSuspicious(item?.status ?? ProjectNamespaceServiceStatusTypeEnum.UNKOWN);
    }

    if (this.hasPods && !exclude.includes(ProjectNamespaceServiceStatusKindEnum.Pod)) {
      const pods = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Pod);
      pods.forEach((pod) => {
        ok &&= isNotSuspicious(pod.status ?? ProjectNamespaceServiceStatusTypeEnum.UNKOWN);
      });
    }

    return ok;
  }

  public getRootNodes(): ProjectNamespaceServiceStatusItemDto[] {
    const resources: ProjectNamespaceServiceStatusItemDto[] = [];
    for (const item of this.items || []) {
      if (item.ownerName === undefined) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  public getParent(forItem: ProjectNamespaceServiceStatusItemDto): ProjectNamespaceServiceStatusItemDto | undefined {
    for (const item of this.items) {
      if (item.name == forItem.ownerName) {
        return cloneDeep(item);
      }
    }

    return undefined;
  }

  public getNextItems(forItem: ProjectNamespaceServiceStatusItemDto): ProjectNamespaceServiceStatusItemDto[] {
    const next: ProjectNamespaceServiceStatusItemDto[] = [];
    for (const item of this.items) {
      if (item.ownerName == forItem.name) {
        next.push(cloneDeep(item));
      }
    }

    return next;
  }

  public getItemsOfType(kind: ProjectNamespaceServiceStatusKindTypeEnum): ProjectNamespaceServiceStatusItemDto[] {
    const resources: ProjectNamespaceServiceStatusItemDto[] = [];
    for (const item of this.items || []) {
      if (item.kind === kind) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }
}
