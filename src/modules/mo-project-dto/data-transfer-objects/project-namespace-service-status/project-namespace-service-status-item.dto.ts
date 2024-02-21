import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  ProjectNamespaceServiceStatusControllerEnum,
  ProjectNamespaceServiceStatusKindEnum,
  ProjectNamespaceServiceStatusKindTypeEnum
} from '../../enums/project-namespace-service-status.enum';
import { KubernetesEventDto } from '../../../../modules/mo-kubernetes/data-transfer-objects/kubernetes-event.dto';

export class ProjectNamespaceServiceStatusResourceItemDto {
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
  ownerKind: string;

  @Expose()
  @IsOptional()
  statusObject: any;

  @Expose()
  @Type(() => KubernetesEventDto)
  @IsOptional()
  events: KubernetesEventDto[];

  status(): any {
    switch (this.kind) {
      case ProjectNamespaceServiceStatusControllerEnum.Deployment: {
        const image = this.statusObject?.image ?? '';
        const paused = this.statusObject?.paused ?? false;
        const replicas = +(this.statusObject?.replicas ?? 0);
        const expectedReplicas = +(this.statusObject?.status?.replicas ?? replicas);
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
          ready: `${availability}/${replicas}`,
          isHappy: replicas === availableReplicas,
          hasImagePlaceholder: image === 'PLACEHOLDER-UNTIL-BUILDSERVER-OVERWRITES-THIS-IMAGE'
        };
      }
      case ProjectNamespaceServiceStatusControllerEnum.CronJob: {
        const image = this.statusObject?.image ?? '';
        const suspend = this.statusObject?.suspend ?? false;

        return {
          image: image,
          suspend: suspend
        };
      }
      case ProjectNamespaceServiceStatusControllerEnum.Job:
        break;
      case ProjectNamespaceServiceStatusKindEnum.BuildJob:
        return { state: this.statusObject?.state };
      case ProjectNamespaceServiceStatusKindEnum.Pod:
        return { state: this.statusObject?.phase };
      case ProjectNamespaceServiceStatusKindEnum.Container: {
        let state: string;
        const obj = this.statusObject?.state ?? {};
        let reason;
        if ('waiting' in obj) {
          state = 'waiting';
          reason = obj.waiting?.reason;
        } else if ('running' in obj) {
          state = 'running';
          reason = obj.running?.reason;
        } else if ('terminated' in obj) {
          state = 'terminated';
          reason = obj.terminated?.reason;
        } else {
          state = 'unkown';
        }

        const restartCount = this.statusObject?.restartCount;
        const name = this.statusObject?.name;

        return { restartCount: restartCount, state: state, name: name, reason: reason };
      }
      default:
        return {};
    }
  }
}
