import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import moment from 'moment';
import { K8sGetWorkloadRequestDto } from '../../../mo-kubernetes';
import {
  V1DaemonSetStatus,
  V1DeploymentStatus,
  V1IngressStatus,
  V1PodStatus,
  V1ReplicaSetStatus,
  V1ServiceStatus,
  V1StatefulSetStatus
} from '@kubernetes/client-node';

export class WorkspaceWorkloadStatusItemDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  uid: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  creationTimestamp?: string;

  @IsNotEmpty()
  @Type(() => K8sGetWorkloadRequestDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  resource: K8sGetWorkloadRequestDto;

  @IsOptional()
  @Expose()
  status?: any;

  @IsOptional()
  @IsNumber()
  @Expose()
  replicas?: number;

  @IsOptional()
  @IsString()
  @Expose()
  specClusterIP?: string;

  @IsOptional()
  @IsString()
  @Expose()
  specType?: string;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'ReplicaSet') {
      return undefined;
    }
    const replicas = obj.replicas ?? 0;
    const status: V1ReplicaSetStatus = obj.status ?? {};
    if (!replicas || replicas === 0) {
      return 'inactive';
    }

    if (status.readyReplicas === replicas && status.availableReplicas === replicas) {
      return 'success';
    }

    if (status.replicas < replicas) {
      return 'building';
    }

    if (
      (status.readyReplicas && status.readyReplicas < replicas) ||
      (status.availableReplicas && status.availableReplicas < replicas)
    ) {
      return 'warning';
    }

    if (status.availableReplicas === 0 && status.replicas > 0) {
      return 'danger';
    }

    return 'info';
  })
  @Expose()
  replicaSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'Deployment') {
      return undefined;
    }

    const status: V1DeploymentStatus = obj.status ?? {};

    if (!status.replicas || status.replicas === 0) {
      return 'inactive';
    }

    if (status.updatedReplicas && status.updatedReplicas < status.replicas) {
      return 'building';
    }

    if (status.readyReplicas === status.replicas && status.availableReplicas === status.replicas) {
      return 'success';
    }

    if (status.unavailableReplicas && status.unavailableReplicas > 0) {
      if (
        status.conditions &&
        status.conditions.some((condition) => condition.type === 'Progressing' && condition.status === 'False')
      ) {
        return 'error';
      }
      return 'danger';
    }

    if (
      (status.readyReplicas && status.readyReplicas < status.replicas) ||
      (status.availableReplicas && status.availableReplicas < status.replicas)
    ) {
      return 'warning';
    }

    return 'info';
  })
  @Expose()
  deploymentStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'Pod') {
      return undefined;
    }

    const status: V1PodStatus = obj.status ?? {};

    switch (status.phase) {
      case 'Pending':
        return 'building';
      case 'Running':
        if (status.containerStatuses) {
          for (const containerStatus of status.containerStatuses) {
            if (containerStatus.state && containerStatus.state?.waiting) {
              const reason = containerStatus.state.waiting.reason;
              if (reason === 'CrashLoopBackOff' || reason === 'ErrImagePull' || reason === 'RunContainerError') {
                return 'danger';
              }
              return 'building';
            }
            if (containerStatus.state && containerStatus.state?.terminated) {
              const reason = containerStatus.state.terminated.reason;
              if (reason === 'Error' || reason === 'OOMKilled') {
                return 'error';
              }
            }
            if (!containerStatus.ready) {
              return 'warning';
            }
          }
        }
        return 'success';
      case 'Succeeded':
        return 'success';
      case 'Failed':
        return 'error';
      case 'Unknown':
        return 'warning';
      default:
        return 'inactive';
    }
  })
  @Expose()
  podStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'Service') {
      return undefined;
    }

    const status: V1ServiceStatus = obj.status ?? {};

    if (!obj.specClusterIP || obj.specClusterIP === 'None') {
      return 'inactive';
    }

    // Check the service type conditions
    switch (obj.specType) {
      case 'ClusterIP':
        return 'success';
      case 'NodePort':
        return 'success';
      case 'LoadBalancer':
        if (status.loadBalancer && status.loadBalancer.ingress && status.loadBalancer.ingress.length > 0) {
          return 'success';
        }
        return 'warning';
      default:
        return 'info';
    }
  })
  @Expose()
  serviceStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'Ingress') {
      return undefined;
    }

    const status: V1IngressStatus = obj.status ?? {};

    if (!status.loadBalancer || !status.loadBalancer.ingress || status.loadBalancer.ingress.length === 0) {
      return 'inactive';
    }

    if (status.loadBalancer.ingress.some((entry) => entry.ip || entry.hostname)) {
      return 'success';
    }

    return 'building';
  })
  @Expose()
  ingressStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'StatefulSet') {
      return undefined;
    }

    const status: V1StatefulSetStatus = obj.status ?? {};
    const replicas = obj.replicas ?? 0;

    if (replicas === 0) {
      return 'inactive';
    }

    if (status.updatedReplicas && status.updatedReplicas < replicas) {
      return 'building';
    }

    if (
      status.readyReplicas === replicas &&
      status.currentReplicas === replicas &&
      status.updatedReplicas === replicas
    ) {
      return 'success';
    }

    if (status.readyReplicas !== replicas) {
      return 'warning';
    }

    return 'info';
  })
  @Expose()
  statefulSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadStatusItemDto }) => {
    if (value) {
      return value;
    }
    if (obj.resource.kind !== 'DaemonSet') {
      return undefined;
    }

    const status: V1DaemonSetStatus = obj.status ?? {};
    const replicas = obj.replicas ?? 0;

    if (status.desiredNumberScheduled === 0) {
      return 'inactive';
    }

    if (
      status.currentNumberScheduled === status.desiredNumberScheduled &&
      (status.updatedNumberScheduled === undefined ||
        status.updatedNumberScheduled === status.desiredNumberScheduled) &&
      status.numberReady === status.desiredNumberScheduled
    ) {
      return 'success';
    }

    if (status.updatedNumberScheduled !== undefined && status.updatedNumberScheduled < status.desiredNumberScheduled) {
      return 'building';
    }

    if (status.numberReady < status.desiredNumberScheduled) {
      return 'warning';
    }

    if (status.numberUnavailable !== undefined && status.numberUnavailable > 0) {
      return 'danger';
    }

    return 'info';
  })
  @Expose()
  daemonSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;
}
