export enum ProjectNamespaceServiceStatusController {
  Deployment = 'Deployment',
  ReplicaSet = 'ReplicaSet',
  StatefulSet = 'StatefulSet',
  DaemonSet = 'DaemonSet',
  Job = 'Job',
  CronJob = 'CronJob'
}

export enum ProjectNamespaceServiceStatusKind {
  BuildJob = 'BuildJob',
  Pod = 'Pod',
  Container = 'Container'
}

export type ProjectNamespaceServiceStatusKindType =
  | ProjectNamespaceServiceStatusController
  | ProjectNamespaceServiceStatusKind;
