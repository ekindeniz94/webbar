import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import moment from 'moment';
import {
  CoreV1Event,
  V1CronJobStatus,
  V1DaemonSetStatus,
  V1DeploymentStatus,
  V1Endpoint,
  V1IngressStatus,
  V1JobStatus,
  V1NamespaceStatus,
  V1OwnerReference,
  V1PodStatus,
  V1ReplicaSetStatus,
  V1ServiceStatus,
  V1StatefulSetStatus
} from '@kubernetes/client-node';
import { DefaultK8sResourceEntry } from '../../mo-kubernetes-dto.const';

export class K8sWorkloadStatusItemDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  uid: string;

  @Expose()
  endpoints?: V1Endpoint[];

  @Expose()
  ownerReferences?: V1OwnerReference[];

  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  group: string;

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

  @IsOptional()
  @Expose()
  status?: any;

  @IsOptional()
  @Expose()
  events?: CoreV1Event[];

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

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'ReplicaSet') {
      return undefined;
    }
    const replicas = obj.replicas ?? 0;
    const status: V1ReplicaSetStatus = obj.status ?? {};
    if (!replicas || replicas === 0) {
      return 'inactive';
    }

    if (status?.readyReplicas === replicas && status?.availableReplicas === replicas) {
      return 'success';
    }

    if (status?.replicas < replicas) {
      return 'building';
    }

    if (
      (status?.readyReplicas && status?.readyReplicas < replicas) ||
      (status?.availableReplicas && status?.availableReplicas < replicas)
    ) {
      return 'warning';
    }

    if (status?.availableReplicas === 0 && status?.replicas > 0) {
      return 'danger';
    }

    return 'info';
  })
  @Expose()
  replicaSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Namespace') {
      return undefined;
    }
    const status: V1NamespaceStatus = obj.status ?? {};
    if (!status || !status?.phase) {
      return 'inactive';
    }
    switch (status?.phase) {
      case 'Active':
        return 'success';
      case 'Terminating':
        return 'building';
      default:
        if (status?.conditions) {
          for (const condition of status?.conditions) {
            if (condition.type === 'NamespaceDeletionContentFailure' && condition.status === 'True') {
              return 'danger';
            }
            if (condition.type === 'NamespaceDeletionDiscoveryFailure' && condition.status === 'True') {
              return 'warning';
            }
          }
        }
        return 'error';
    }
  })
  @Expose()
  namespaceStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Deployment') {
      return undefined;
    }

    const status: V1DeploymentStatus = obj.status ?? {};

    if (!status?.replicas || status?.replicas === 0) {
      return 'inactive';
    }

    if (status?.updatedReplicas && status?.updatedReplicas < status?.replicas) {
      return 'building';
    }

    if (status?.readyReplicas === status?.replicas && status?.availableReplicas === status?.replicas) {
      return 'success';
    }

    if (status?.unavailableReplicas && status?.unavailableReplicas > 0) {
      if (
        status?.conditions &&
        status?.conditions.some((condition) => condition.type === 'Progressing' && condition.status === 'False')
      ) {
        obj.deploymentMessages = status?.conditions.map((item) => `[${item.reason}] ${item.message}`).join(', ');
        return 'error';
      }
      return 'danger';
    }

    if (
      (status?.readyReplicas && status?.readyReplicas < status?.replicas) ||
      (status?.availableReplicas && status?.availableReplicas < status?.replicas)
    ) {
      return 'warning';
    }

    return 'info';
  })
  @Expose()
  deploymentStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @IsOptional()
  @IsString()
  @Expose()
  deploymentMessages?: string | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Pod') {
      return undefined;
    }

    const status: V1PodStatus = obj.status ?? {};

    if (status?.conditions) {
      for (const condition of status.conditions) {
        if (condition.type === 'PodScheduled' && condition.status === 'False' && condition.reason === 'Unschedulable') {
          return 'warning';
        }
      }
    }

    switch (status?.phase) {
      case 'Pending':
        return 'building';
      case 'Running':
      case 'Succeeded':
        if (status?.containerStatuses) {
          for (const containerStatus of status.containerStatuses) {
            if (containerStatus.state?.waiting) {
              const reason = containerStatus.state.waiting.reason;
              if (reason === 'CrashLoopBackOff' || reason === 'ErrImagePull' || reason === 'RunContainerError') {
                return 'danger';
              }
              return 'building';
            }
            if (containerStatus.state && containerStatus.state?.terminated) {
              const reason = containerStatus.state.terminated.reason;
              if (reason === 'Completed' && containerStatus.started === false) {
                return 'inactive';
              }
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

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Service') {
      return undefined;
    }

    const status: V1ServiceStatus = obj.status ?? {};

    if (!obj.specClusterIP || obj.specClusterIP === 'None') {
      return 'inactive';
    }

    switch (obj.specType) {
      case 'ClusterIP':
        return 'success';
      case 'NodePort':
        return 'success';
      case 'LoadBalancer':
        if (status?.loadBalancer && status?.loadBalancer.ingress && status?.loadBalancer?.ingress.length > 0) {
          return 'success';
        }
        return 'warning';
      default:
        return 'info';
    }
  })
  @Expose()
  serviceStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Ingress') {
      return undefined;
    }

    const status: V1IngressStatus = obj.status ?? {};

    if (!status?.loadBalancer || !status?.loadBalancer.ingress || status?.loadBalancer.ingress.length === 0) {
      return 'inactive';
    }

    if (status?.loadBalancer.ingress.some((entry) => entry.ip || entry.hostname)) {
      return 'success';
    }

    return 'building';
  })
  @Expose()
  ingressStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'StatefulSet') {
      return undefined;
    }

    const status: V1StatefulSetStatus = obj.status ?? {};
    const replicas = obj.replicas ?? 0;

    if (replicas === 0) {
      return 'inactive';
    }

    if (status?.updatedReplicas && status?.updatedReplicas < replicas) {
      return 'building';
    }

    if (
      status?.readyReplicas === replicas &&
      status?.currentReplicas === replicas &&
      status?.updatedReplicas === replicas
    ) {
      return 'success';
    }

    if (status?.readyReplicas !== replicas) {
      return 'warning';
    }

    return 'info';
  })
  @Expose()
  statefulSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'DaemonSet') {
      return undefined;
    }

    const status: V1DaemonSetStatus = obj.status ?? {};
    const replicas = obj.replicas ?? 0;

    if (status?.desiredNumberScheduled === 0) {
      return 'inactive';
    }

    if (
      status?.currentNumberScheduled === status?.desiredNumberScheduled &&
      (status?.updatedNumberScheduled === undefined ||
        status?.updatedNumberScheduled === status?.desiredNumberScheduled) &&
      status?.numberReady === status?.desiredNumberScheduled
    ) {
      return 'success';
    }

    if (
      status?.updatedNumberScheduled !== undefined &&
      status?.updatedNumberScheduled < status?.desiredNumberScheduled
    ) {
      return 'building';
    }

    if (status?.numberReady < status?.desiredNumberScheduled) {
      return 'warning';
    }

    if (status?.numberUnavailable !== undefined && status?.numberUnavailable > 0) {
      return 'danger';
    }

    return 'info';
  })
  @Expose()
  daemonSetStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'CronJob') {
      return undefined;
    }

    const status: V1CronJobStatus = obj.status ?? {};

    if (!status) {
      return 'inactive';
    }

    if (obj.events) {
      for (const event of obj.events) {
        switch (event.reason) {
          case 'TooManyMissedTimes':
            return 'danger';
          case 'JobAlreadyActive':
            return 'warning';
        }
      }
    }

    if (status.active && status.active.length > 0) {
      return 'building';
    }

    const currentTime = new Date();

    if (
      status.lastSuccessfulTime &&
      status.lastSuccessfulTime.getTime &&
      currentTime.getTime() - status.lastSuccessfulTime.getTime() < 3600000
    ) {
      return 'success';
    }

    if (!status.lastSuccessfulTime) {
      return 'warning';
    }

    return 'info';
  })
  @Expose()
  cronJobStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'Job') {
      return undefined;
    }

    const status: V1JobStatus = obj.status ?? {};

    if (status.active && status.active > 0) {
      return 'building';
    }

    if (status.succeeded && status.succeeded > 0) {
      return 'success';
    }

    if (status.failed && status.failed > 0) {
      return 'danger';
    }

    return 'inactive';
  })
  @Expose()
  jobStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'PersistentVolume') {
      return undefined;
    }

    const status = obj.status ?? {};

    switch (status.phase) {
      case 'Available':
        return 'info';
      case 'Bound':
        return 'success';
      case 'Released':
        return 'warning';
      case 'Failed':
        return 'danger';
      default:
        return 'unknown';
    }
  })
  @Expose()
  pvStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'PersistentVolumeClaim') {
      return undefined;
    }
    const status = obj.status ?? {};

    switch (status.phase) {
      case 'Pending':
        return 'building';
      case 'Bound':
        return 'success';
      case 'Lost':
        return 'danger';
      default:
        return 'unknown';
    }
  })
  @Expose()
  pvcStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'PodDisruptionBudget') {
      return undefined;
    }

    const status = obj.status ?? {};

    if (status.currentHealthy < status.desiredHealthy) {
      return 'danger';
    }

    if (status.desiredHealthy && status.currentHealthy >= status.desiredHealthy) {
      return 'success';
    }

    if (status.currentHealthy === 0) {
      return 'warning';
    }

    return 'inactive';
  })
  @Expose()
  pdbStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'CiliumEndpoint') {
      return undefined;
    }

    const status = obj.status ?? {};

    if (status.networking && status.networking['health'] === 'Disconnected') {
      return 'danger';
    }

    if ((status.policy && status.policy['realized']) || obj?.status?.state === 'ready') {
      return 'success';
    }

    if (status.policy && status.policy['error']) {
      return 'error';
    }

    return 'unknown';
  })
  @Expose()
  ciliumEndpointStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    if (obj?.kind !== 'EndpointSlice') {
      return undefined;
    }

    if (!obj.endpoints) {
      return 'unknown';
    }

    const allReady = obj.endpoints.every((endpoint: V1Endpoint) => endpoint?.conditions?.ready === true);
    const someNotReady = obj.endpoints.some((endpoint: V1Endpoint) => endpoint?.conditions?.ready !== true);

    if (allReady) {
      return 'success';
    }

    if (someNotReady) {
      return 'warning';
    }

    return 'unknown';
  })
  @Expose()
  endpointSliceStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  // @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
  //   if (obj?.kind !== 'ServiceAccount') {
  //     return undefined;
  //   }
  //
  //   return 'success';
  // })
  // @Expose()
  // serviceAccountStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  // @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
  //   if (obj?.kind !== 'ConfigMap') {
  //     return undefined;
  //   }
  //
  //   return 'success';
  // })
  // @Expose()
  // configMapStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  // @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
  //   if (obj?.kind !== 'Secret') {
  //     return undefined;
  //   }
  //
  //   return 'success';
  // })
  // @Expose()
  // secretStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  // @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
  //   if (obj?.kind !== 'Endpoints') {
  //     return undefined;
  //   }
  //
  //   return 'success';
  // })
  // @Expose()
  // endpointsStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  // @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
  //   if (obj?.kind !== 'NetworkPolicy') {
  //     return undefined;
  //   }
  //
  //   return 'success';
  // })
  // @Expose()
  // networkPolicyStatus?: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  @Transform(({ value, obj }: { value: string; obj: K8sWorkloadStatusItemDto }) => {
    const results = [];
    if (obj.events && obj.events?.length > 0) {
      for (const event of obj.events) {
        const reason = event.reason;
        results.push({ reason: reason, message: event.message });
      }
    }
    switch (obj.kind) {
      case DefaultK8sResourceEntry.PodResource.kind:
        if (obj.podStatus === 'error') {
          const podStatus: V1PodStatus = obj.status;
          if (!podStatus) {
            break;
          }
          results.push({ reason: podStatus.reason, message: podStatus.message });

          // add conditions messages
          if (podStatus?.conditions) {
            for (const condition of podStatus.conditions) {
              results.push({ reason: condition.reason, message: condition.message });
            }
          }

          // add container statuses messages
          if (podStatus?.containerStatuses) {
            for (const containerStatus of podStatus.containerStatuses) {
              if (containerStatus.state && containerStatus.state?.waiting) {
                results.push({
                  reason: containerStatus.state.waiting.reason,
                  message: containerStatus.state.waiting.message
                });
              }
              if (containerStatus.state && containerStatus.state?.terminated) {
                results.push({
                  reason: containerStatus.state.terminated.reason,
                  message: containerStatus.state.terminated.message
                });
              }
            }
          }
        }
        break;
      case DefaultK8sResourceEntry.DeploymentResource.kind:
        const deploymentStatus: V1DeploymentStatus = obj.status;
        if (!deploymentStatus) {
          break;
        }
        // add conditions messages
        if (deploymentStatus?.conditions) {
          for (const condition of deploymentStatus.conditions) {
            results.push({ reason: condition.reason, message: condition.message });
          }
        }
        break;
      case DefaultK8sResourceEntry.ReplicaSetResource.kind:
        const replicaSetStatus: V1ReplicaSetStatus = obj.status;
        if (!replicaSetStatus) {
          break;
        }
        // add conditions messages
        if (replicaSetStatus?.conditions) {
          for (const condition of replicaSetStatus.conditions) {
            results.push({ reason: condition.reason, message: condition.message });
          }
        }
        break;
      case DefaultK8sResourceEntry.StatefulSetResource.kind:
        const statefulSetStatus: V1StatefulSetStatus = obj.status;
        if (!statefulSetStatus) {
          break;
        }
        // add conditions messages
        if (statefulSetStatus?.conditions) {
          for (const condition of statefulSetStatus.conditions) {
            results.push({ reason: condition.reason, message: condition.message });
          }
        }
        break;
      case DefaultK8sResourceEntry.DaemonSetResource.kind:
        const daemonSetStatus: V1DaemonSetStatus = obj.status;
        if (!daemonSetStatus) {
          break;
        }
        // add conditions messages
        if (daemonSetStatus?.conditions) {
          for (const condition of daemonSetStatus.conditions) {
            results.push({ reason: condition.reason, message: condition.message });
          }
        }
        break;
      default:
        break;
    }

    return results.length > 0 ? results : undefined;
  })
  @Expose()
  messages?: { reason: any; message: string }[] | undefined;
}
