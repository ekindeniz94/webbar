import { Expose, Transform, Type } from 'class-transformer';
import {
  ProjectNamespaceServiceStatusControllerEnum,
  ProjectNamespaceServiceStatusKindEnum,
  ProjectNamespaceServiceStatusKindTypeEnum
} from '../../enums/project-namespace-service-status.enum';
import { cloneDeep } from 'lodash';
import { isArray, IsOptional } from 'class-validator';
import { ProjectNamespaceServiceStatusMessageDto } from './project-namespace-service-status-message.dto';
import { ProjectNamespaceServiceStatusItemDto } from './project-namespace-service-status-item.dto';
import { ProjectNamespaceServiceStatusTypeEnum } from '../../enums';
import { TransformToBoolean } from '@mo/js-utils';

export class ProjectNamespaceServiceStatusDto {
  @Type(() => ProjectNamespaceServiceStatusItemDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  items: ProjectNamespaceServiceStatusItemDto[];

  @TransformToBoolean(false)
  @Expose()
  switchedOn: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasPods: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasContainers: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasDeployment: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasJob: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasCronJob: boolean;

  @TransformToBoolean(false)
  @Expose()
  hasBuild: boolean;

  @Expose()
  get hasWarnings(): boolean {
    return (this.warnings?.length ?? 0) > 0;
  }

  @Type(() => ProjectNamespaceServiceStatusMessageDto)
  @IsOptional()
  @Expose()
  warnings?: ProjectNamespaceServiceStatusMessageDto[];

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
