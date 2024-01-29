import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  ProjectNamespaceServiceStatusControllerEnum,
  ProjectNamespaceServiceStatusKindEnum,
  ProjectNamespaceServiceStatusKindTypeEnum
} from './project-namespace-service-status.enum';

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

        const originStatusObject = this.statusObject?.status;

        return {
          image: image,
          suspend: suspend,
          isActive: (originStatusObject?.active ?? []).length > 0,
          hasImagePlaceholder: image === 'PLACEHOLDER-UNTIL-BUILDSERVER-OVERWRITES-THIS-IMAGE'
        };
      }
      case ProjectNamespaceServiceStatusControllerEnum.Job:
        const active = this.statusObject?.active;
        const terminating = this.statusObject?.terminating;
        const ready = this.statusObject?.ready;
        const succeeded = this.statusObject?.succeeded;
        const failed = this.statusObject?.failed;

        return {
          isActive: active > 0 || terminating > 0 || ready > 0 || succeeded > 0,
          isFailed: failed > 0
        };
      case ProjectNamespaceServiceStatusKindEnum.BuildJob:
        return { state: this.statusObject?.state };
      case ProjectNamespaceServiceStatusKindEnum.Pod:
        return { state: this.statusObject?.phase };
      case ProjectNamespaceServiceStatusKindEnum.Container: {
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
