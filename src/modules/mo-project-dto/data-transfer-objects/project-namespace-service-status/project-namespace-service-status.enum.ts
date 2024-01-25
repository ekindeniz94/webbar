export enum ProjectNamespaceServiceStatusControllerEnum {
  Deployment = 'Deployment',
  ReplicaSet = 'ReplicaSet',
  StatefulSet = 'StatefulSet',
  DaemonSet = 'DaemonSet',
  Job = 'Job',
  CronJob = 'CronJob'
}

export enum ProjectNamespaceServiceStatusKindEnum {
  BuildJob = 'BuildJob',
  Pod = 'Pod',
  Container = 'Container'
}

export type ProjectNamespaceServiceStatusKindTypeEnum =
  | ProjectNamespaceServiceStatusControllerEnum
  | ProjectNamespaceServiceStatusKindEnum;
