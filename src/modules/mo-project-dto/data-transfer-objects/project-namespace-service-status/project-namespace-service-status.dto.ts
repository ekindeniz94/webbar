import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  ProjectNamespaceServiceStatusController,
  ProjectNamespaceServiceStatusKind,
  ProjectNamespaceServiceStatusKindType
} from './project-namespace-service-status.enum';
import moment from 'moment';

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

  getParent(
    items: ProjectNamespaceServiceStatusResourceItemDto[]
  ): ProjectNamespaceServiceStatusResourceItemDto | undefined {
    for (const item of items) {
      if (this.ownerName == item.name) {
        return item;
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
        next.push(item);
      }
    }

    return next.length > 0 ? next : undefined;
  }

  static getItemsOfType(
    items: ProjectNamespaceServiceStatusResourceItemDto[],
    kind: ProjectNamespaceServiceStatusKindType
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of items) {
      if (item.kind === kind) {
        resources.push(item);
      }
    }

    return resources;
  }

  status(): any {
    switch (this.kind) {
      case ProjectNamespaceServiceStatusController.Deployment: {
        const state = (this.statusObject?.conditions ?? [])
          .sort((a: any, b: any) => {
            const ma = moment(a.lastTransitionTime, moment.ISO_8601);
            const mb = moment(b.lastTransitionTime, moment.ISO_8601);
            return ma.diff(mb);
          })
          .pop();

        const replicas = this.statusObject?.replicas;

        return {
          replicas: replicas,
          state: state?.reason,
          type: state?.type
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
}
