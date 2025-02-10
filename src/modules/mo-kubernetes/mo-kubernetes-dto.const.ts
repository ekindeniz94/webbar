import { K8sBuildTaskEnum } from './enums';
import { MoUtils } from '@mogenius/js-utils';
import { K8sResourceEntryDto } from './data-transfer-objects';

export const KUBERNETES_CONST = {
  NAME: {
    MIN: 3,
    MAX: 253
  },
  LABEL_NAME: {
    MIN: 3,
    MAX: 50
  }
};

export const ALLOWED_BUILD_TASKS = [
  K8sBuildTaskEnum.LS,
  K8sBuildTaskEnum.CLONE,
  K8sBuildTaskEnum.BUILD,
  K8sBuildTaskEnum.PUSH
];

export const DefaultK8sResourceEntry = {
  NamespaceResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Namespace',
    name: 'namespaces',
    namespaced: false,
    group: 'v1',
    version: ''
  }),

  DeploymentResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Deployment',
    name: 'deployments',
    namespaced: true,
    group: 'apps/v1',
    version: ''
  }),

  CronJobResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'CronJob',
    name: 'cronjobs',
    namespaced: true,
    group: 'batch/v1',
    version: ''
  }),

  PodResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Pod',
    name: 'pods',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  ReplicaSetResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'ReplicaSet',
    name: 'replicasets',
    namespaced: true,
    group: 'apps/v1',
    version: ''
  }),

  StatefulSetResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'StatefulSet',
    name: 'statefulsets',
    namespaced: true,
    group: 'apps/v1',
    version: ''
  }),

  DaemonSetResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'DaemonSet',
    name: 'daemonsets',
    namespaced: true,
    group: 'apps/v1',
    version: ''
  }),

  JobResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Job',
    name: 'jobs',
    namespaced: true,
    group: 'batch/v1',
    version: ''
  }),

  ReplicationControllerResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'ReplicationController',
    name: 'replicationcontrollers',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  EventResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Event',
    name: 'events',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  EventEventsK8sIoResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Event',
    name: 'events',
    namespaced: true,
    group: 'events.k8s.io/v1',
    version: ''
  }),

  PersistentVolumeResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'PersistentVolume',
    name: 'persistentvolumes',
    namespaced: false,
    group: 'v1',
    version: ''
  }),

  ControllerRevisionResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'ControllerRevision',
    name: 'controllerrevisions',
    namespaced: true,
    group: 'apps/v1',
    version: ''
  }),

  EndpointSliceResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'EndpointSlice',
    name: 'endpointslices',
    namespaced: true,
    group: 'discovery.k8s.io/v1',
    version: ''
  }),

  EndpointsResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Endpoints',
    name: 'endpoints',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  ServiceResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Service',
    name: 'services',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  ConfigMapResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'ConfigMap',
    name: 'configmaps',
    namespaced: true,
    group: 'v1',
    version: ''
  }),

  SecretResource: MoUtils.transformToDto(K8sResourceEntryDto, {
    kind: 'Secret',
    name: 'secrets',
    namespaced: true,
    group: 'v1',
    version: ''
  })
};
