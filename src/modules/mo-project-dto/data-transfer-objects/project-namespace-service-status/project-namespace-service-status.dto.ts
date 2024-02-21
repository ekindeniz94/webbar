import { Expose, Transform, Type } from 'class-transformer';
import {
  ProjectNamespaceServiceStatusControllerEnum,
  ProjectNamespaceServiceStatusEnum,
  ProjectNamespaceServiceStatusKindEnum,
  ProjectNamespaceServiceStatusKindTypeEnum
} from '../../enums/project-namespace-service-status.enum';
import { cloneDeep } from 'lodash';
import { ProjectNamespaceServiceStatusResourceItemDto } from './project-namespace-service-status-item.dto';
import { isArray } from 'class-validator';
import { KubernetesEventTypeEnum } from '../../../../modules/mo-kubernetes/enums';

export class ProjectNamespaceServiceStatusResourceDto {
  @Expose()
  @Type(() => ProjectNamespaceServiceStatusResourceItemDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  items: ProjectNamespaceServiceStatusResourceItemDto[];

  @Expose()
  get switchedOn(): boolean {
    if (this.hasDeployment) {
      const status = this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.Deployment).pop()?.status();
      return status.replicas > 0;
    } else if (this.hasCronJob) {
      const status = this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.CronJob).pop()?.status();
      return !status.suspend;
    }
    return true;
  }

  @Expose()
  get hasPods(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Pod).length > 0;
  }

  @Expose()
  get hasContainers(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Container).length > 0;
  }

  @Expose()
  get hasDeployment(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.Deployment).length > 0;
  }

  @Expose()
  get hasJob(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.Job).length > 0;
  }

  @Expose()
  get hasCronJob(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.CronJob).length > 0;
  }

  @Expose()
  get hasBuild(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.BuildJob).length > 0;
  }

  @Expose()
  get hasWarnings(): boolean {
    return this.warnings.length > 0;
  }

  @Expose()
  get warnings(): string[] {
    const warnings: string[] = [];

    this.items.forEach((item) => {
      item.events?.forEach((event) => {
        if (event.type === KubernetesEventTypeEnum.WARNING) {
          warnings.push(event.message);
        }
      });
    });

    return [...new Set(warnings)];
  }

  public isOk(exclude: ProjectNamespaceServiceStatusKindTypeEnum[]): boolean {
    const isNotSuspicious = (status: ProjectNamespaceServiceStatusEnum) =>
      ![ProjectNamespaceServiceStatusEnum.ERROR, ProjectNamespaceServiceStatusEnum.WARNING].includes(status);

    let ok = true;

    if (this.hasBuild && !exclude.includes(ProjectNamespaceServiceStatusKindEnum.BuildJob)) {
      ok &&= isNotSuspicious(this.buildStatus());
    }

    if (this.hasDeployment && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.Deployment)) {
      ok &&= isNotSuspicious(this.deploymentStatus());
    }

    if (this.hasCronJob && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.CronJob)) {
      ok &&= isNotSuspicious(this.cronJobStatus());
    }

    if (this.hasJob && !exclude.includes(ProjectNamespaceServiceStatusControllerEnum.Job)) {
      ok &&= isNotSuspicious(this.jobStatus());
    }

    if (this.hasPods && !exclude.includes(ProjectNamespaceServiceStatusKindEnum.Pod)) {
      const pods = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Pod);
      pods.forEach((pod) => {
        ok &&= isNotSuspicious(this.podStatusByItem(pod));
      });
    }

    return ok;
  }

  public deploymentStatus(): ProjectNamespaceServiceStatusEnum {
    const items = this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.Deployment);
    if (items.length === 0) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = items[0].status();
    if (status?.isHappy) {
      return ProjectNamespaceServiceStatusEnum.SUCCESS;
    }

    if (status?.hasImagePlaceholder) {
      return ProjectNamespaceServiceStatusEnum.PENDING;
    }

    const conditions = status?.statusObject?.status?.conditions;

    const available = conditions?.find((condition: any) => condition.type === 'Available');
    if (available?.status === 'True') {
      return ProjectNamespaceServiceStatusEnum.SUCCESS;
    }
    const replicaFailure = conditions?.find((condition: any) => condition.type === 'ReplicaFailure');
    if (replicaFailure?.status === 'True') {
      return ProjectNamespaceServiceStatusEnum.ERROR;
    }
    const progressing = conditions?.find((condition: any) => condition.type === 'Progressing');
    if (progressing?.status === 'True') {
      return ProjectNamespaceServiceStatusEnum.PENDING;
    }

    if (status?.unavailableReplicas > 0) {
      return ProjectNamespaceServiceStatusEnum.WARNING;
    }

    return ProjectNamespaceServiceStatusEnum.UNKOWN;
  }

  public buildStatus(): ProjectNamespaceServiceStatusEnum {
    const items = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.BuildJob);
    if (items.length === 0) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = items[0].status();
    switch (status?.state) {
      case 'STARTED':
      case 'PENDING':
        return ProjectNamespaceServiceStatusEnum.PENDING;
      case 'SUCCEEDED':
        return ProjectNamespaceServiceStatusEnum.SUCCESS;
      case 'FAILED':
      case 'CANCELED':
      case 'TIMEOUT':
        return ProjectNamespaceServiceStatusEnum.ERROR;
      default:
        return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }
  }

  public cronJobStatus(): ProjectNamespaceServiceStatusEnum {
    const items = this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.CronJob);
    if (items.length === 0) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = items[0].status();

    if (status?.image !== '' && !status?.hasImagePlaceholder && status?.suspend === false) {
      return ProjectNamespaceServiceStatusEnum.SUCCESS;
    }

    if (status?.hasImagePlaceholder && status?.suspend === false) {
      return ProjectNamespaceServiceStatusEnum.ERROR;
    }

    if (status?.hasImagePlaceholder && status?.suspend) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    return ProjectNamespaceServiceStatusEnum.SUCCESS;
  }

  public jobStatus(): ProjectNamespaceServiceStatusEnum {
    const items = this.getItemsOfType(ProjectNamespaceServiceStatusControllerEnum.Job);
    if (items.length === 0) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = items[0].status();

    if (status?.isActive) {
      return ProjectNamespaceServiceStatusEnum.PENDING;
    }

    if (status?.isFailed) {
      return ProjectNamespaceServiceStatusEnum.ERROR;
    }

    return ProjectNamespaceServiceStatusEnum.UNKOWN;
  }

  public podStatusByName(podName: string): ProjectNamespaceServiceStatusEnum {
    const items = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Pod);
    if (items.length === 0) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const pod = items.find((pod) => pod.name === podName);
    if (pod === undefined) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = pod.status();

    const containers = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Container);
    const container = containers.find((container) => container.ownerName === pod?.name);

    const containerReady = container?.statusObject?.ready ?? false;
    const containerRestartCount = +container?.statusObject?.restartCount ?? 0;
    const containerReason = container?.statusObject?.reason;

    switch (status?.state) {
      case 'Running':
        if (!containerReady) {
          return ProjectNamespaceServiceStatusEnum.WARNING;
        }
        return ProjectNamespaceServiceStatusEnum.SUCCESS;
      case 'Pending':
        return ProjectNamespaceServiceStatusEnum.PENDING;
      case 'Succeeded':
        return ProjectNamespaceServiceStatusEnum.SUCCESS;
      case 'Failed':
        return ProjectNamespaceServiceStatusEnum.ERROR;
      case 'Unknown':
        return ProjectNamespaceServiceStatusEnum.UNKOWN;
      default:
        return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }
  }

  public podStatusByItem(item: ProjectNamespaceServiceStatusResourceItemDto): ProjectNamespaceServiceStatusEnum {
    if (item === undefined) {
      return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }

    const status = item.status();

    const containers = this.getItemsOfType(ProjectNamespaceServiceStatusKindEnum.Container);
    const container = containers.find((container) => container.ownerName === item?.name);

    const containerReady = container?.statusObject?.ready ?? false;
    const containerRestartCount = +container?.statusObject?.restartCount ?? 0;
    const containerReason = container?.statusObject?.reason;

    switch (status?.state) {
      case 'Running':
        if (!containerReady) {
          return ProjectNamespaceServiceStatusEnum.WARNING;
        }
        return ProjectNamespaceServiceStatusEnum.SUCCESS;
      case 'Pending':
        return ProjectNamespaceServiceStatusEnum.PENDING;
      case 'Succeeded':
        return ProjectNamespaceServiceStatusEnum.SUCCESS;
      case 'Failed':
        return ProjectNamespaceServiceStatusEnum.ERROR;
      case 'Unknown':
        return ProjectNamespaceServiceStatusEnum.UNKOWN;
      default:
        return ProjectNamespaceServiceStatusEnum.UNKOWN;
    }
  }

  public getRootNodes(): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items || []) {
      if (item.ownerName === undefined) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  public getParent(
    forItem: ProjectNamespaceServiceStatusResourceItemDto
  ): ProjectNamespaceServiceStatusResourceItemDto | undefined {
    for (const item of this.items) {
      if (item.name == forItem.ownerName) {
        return cloneDeep(item);
      }
    }

    return undefined;
  }

  public getNextItems(
    forItem: ProjectNamespaceServiceStatusResourceItemDto
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const next: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items) {
      if (item.ownerName == forItem.name) {
        next.push(cloneDeep(item));
      }
    }

    return next;
  }

  public getItemsOfType(
    kind: ProjectNamespaceServiceStatusKindTypeEnum
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items || []) {
      if (item.kind === kind) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  public hash(
    hashCallback: (stringified: string) => string = (stringified) => {
      return stringified;
    }
  ): string {
    //
    let hash = '';
    const order = [ProjectNamespaceServiceStatusKindEnum.BuildJob, undefined];
    const roots = this.getRootNodes();
    const compareByAttributes = (
      a: ProjectNamespaceServiceStatusResourceItemDto,
      b: ProjectNamespaceServiceStatusResourceItemDto,
      attributes: string[]
    ): number => {
      let aa: any, bb: any;
      attributes.forEach((key) => {
        aa += (a as any)[key];
        bb += (b as any)[key];
      });

      if (aa < bb) {
        return -1; // a comes first
      }
      if (aa > bb) {
        return 1; // b comes first
      }
      return 0; // no change in order
    };
    const sorted = this.items.sort((a, b) => compareByAttributes(a, b, ['name', 'kind']));
    const noHash = (stringified: string): string => {
      return stringified;
    };

    hashCallback = hashCallback ?? noHash;

    const stableStringify = (obj: any): string => {
      if (typeof obj === 'object' && obj !== null) {
        if (Array.isArray(obj)) {
          return '[' + obj.map(stableStringify).join(',') + ']';
        } else {
          return (
            '{' +
            Object.keys(obj)
              .sort()
              .map((key) => {
                return JSON.stringify(key) + ':' + stableStringify(obj[key]);
              })
              .join(',') +
            '}'
          );
        }
      } else {
        return JSON.stringify(obj);
      }
    };

    const traverse = (node: ProjectNamespaceServiceStatusResourceItemDto): string => {
      let hash = hashCallback(stableStringify(node));

      for (const next of sorted) {
        if (node.name === next.ownerName && node.kind === next.ownerKind) {
          hash = hashCallback(`${hash}${traverse(next)}`);
        }
      }

      return hash;
    };

    for (const key of order) {
      let root: ProjectNamespaceServiceStatusResourceItemDto | undefined;
      if (key === undefined) {
        root = roots.find((root) => root.kind !== ProjectNamespaceServiceStatusKindEnum.BuildJob);
      } else {
        root = roots.find((root) => root.kind === key);
      }

      if (root !== undefined) {
        hash = hashCallback(`${hash}${traverse(root)}`);
      }
    }

    return hash;
  }
}
