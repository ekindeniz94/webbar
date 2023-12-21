import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  ProjectNamespaceServiceStatusController,
  ProjectNamespaceServiceStatusKind,
  ProjectNamespaceServiceStatusKindType
} from './project-namespace-service-status.enum';
import moment from 'moment';
import { cloneDeep } from 'lodash';

export class ProjectNamespaceServiceStatusResourceItemDto {
  @Expose()
  kind: ProjectNamespaceServiceStatusKindType;

  @Expose()
  name: string;

  @Expose()
  namespace: string;

  @Expose()
  @IsOptional()
  ownerName: string;

  @Expose()
  @IsOptional()
  ownerKind: string;

  @Expose()
  @IsOptional()
  statusObject: any;

  static getRootNodes(
    items: ProjectNamespaceServiceStatusResourceItemDto[]
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of items || []) {
      if (item.ownerName === undefined) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  getParent(
    items: ProjectNamespaceServiceStatusResourceItemDto[]
  ): ProjectNamespaceServiceStatusResourceItemDto | undefined {
    for (const item of items) {
      if (this.ownerName == item.name) {
        return cloneDeep(item);
      }
    }

    return undefined;
  }

  getNextItems(
    items: ProjectNamespaceServiceStatusResourceItemDto[]
  ): ProjectNamespaceServiceStatusResourceItemDto[] | undefined {
    const next: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of items) {
      if (this.name == item.ownerName) {
        next.push(cloneDeep(item));
      }
    }

    return next.length > 0 ? next : undefined;
  }

  static getItemsOfType(
    items: ProjectNamespaceServiceStatusResourceItemDto[],
    kind: ProjectNamespaceServiceStatusKindType
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of items || []) {
      if (item.kind === kind) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  status(): any {
    switch (this.kind) {
      case ProjectNamespaceServiceStatusController.Deployment: {
        const conditions = cloneDeep(this.statusObject?.conditions ?? []);
        const condition = conditions
          .sort((a: any, b: any) => {
            const ma = moment(a?.lastTransitionTime, moment.ISO_8601);
            const mb = moment(b?.lastTransitionTime, moment.ISO_8601);
            return ma.diff(mb);
          })
          .pop();

        const replicas = +(this.statusObject?.replicas ?? 0);
        const availableReplicas = +(this.statusObject?.availableReplicas ?? 0);
        const unavailableReplicas = +(this.statusObject?.unavailableReplicas ?? 0);

        let availability = 'n.a.';
        if (replicas === availableReplicas + unavailableReplicas) {
          availability = availableReplicas.toString();
        } else if (availableReplicas > 0) {
          availability = availableReplicas.toString();
        } else if (unavailableReplicas > 0) {
          availability = (replicas - unavailableReplicas).toString();
        } else {
          //
        }

        return {
          replicas: replicas,
          availableReplicas: availableReplicas,
          unavailableReplicas: unavailableReplicas,
          reason: condition?.reason,
          status: condition?.status === 'True',
          type: condition?.type,
          ready: `${availability}/${replicas}`,
          isHappy: replicas === availableReplicas
        };
      }
      case ProjectNamespaceServiceStatusController.CronJob:
        break;
      case ProjectNamespaceServiceStatusController.Job:
        break;
      case ProjectNamespaceServiceStatusKind.BuildJob:
        return { state: this.statusObject?.state };
      case ProjectNamespaceServiceStatusKind.Pod:
        return { state: this.statusObject?.phase };
      case ProjectNamespaceServiceStatusKind.Container: {
        let state: string;
        const obj = this.statusObject?.state ?? {};
        if ('waiting' in obj) {
          state = 'waiting';
        } else if ('running' in obj) {
          state = 'running';
        } else if ('terminated' in obj) {
          state = 'terminated';
        } else {
          state = 'unkown';
        }

        const restartCount = this.statusObject?.restartCount;
        const name = this.statusObject?.name;

        return { restartCount: restartCount, state: state, name: name };
      }
      default:
        return {};
    }
  }

  static buildHash(
    nodes: ProjectNamespaceServiceStatusResourceItemDto[],
    hashCallback: (stringified: string) => string = (stringified) => {
      return stringified;
    }
  ): string {
    //
    let hash = '';
    const order = [ProjectNamespaceServiceStatusKind.BuildJob, undefined];
    const roots = ProjectNamespaceServiceStatusResourceItemDto.getRootNodes(nodes);
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
    const sorted = nodes.sort((a, b) => compareByAttributes(a, b, ['name', 'kind']));
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
        root = roots.find((root) => root.kind !== ProjectNamespaceServiceStatusKind.BuildJob);
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
