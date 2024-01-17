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

  status(): any {
    switch (this.kind) {
      case ProjectNamespaceServiceStatusController.Deployment: {
        const conditions = cloneDeep(this.statusObject?.status?.conditions ?? []);
        const condition = conditions
          .sort((a: any, b: any) => {
            const ma = moment(a?.lastTransitionTime, moment.ISO_8601);
            const mb = moment(b?.lastTransitionTime, moment.ISO_8601);
            return ma.diff(mb);
          })
          .pop();

        const image = this.statusObject?.image ?? '';
        const paused = this.statusObject?.paused ?? false;
        const replicas = +(this.statusObject?.replicas ?? 0);
        const expectedReplicas = +(this.statusObject?.status?.replicas ?? 0);
        const availableReplicas = +(this.statusObject?.status?.availableReplicas ?? 0);
        const unavailableReplicas = +(this.statusObject?.status?.unavailableReplicas ?? 0);

        let availability = `0`;
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
          image: image,
          paused: paused,
          replicas: replicas,
          expectedReplicas: expectedReplicas,
          availableReplicas: availableReplicas,
          unavailableReplicas: unavailableReplicas,
          reason: condition?.reason,
          status: condition?.status === 'True',
          type: condition?.type,
          ready: `${availability}/${replicas}`,
          isHappy: replicas === availableReplicas
        };
      }
      case ProjectNamespaceServiceStatusController.CronJob: {
        const image = this.statusObject?.image ?? '';
        const suspend = this.statusObject?.suspend ?? false;

        return {
          image: image,
          suspend: suspend
        };
      }
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
