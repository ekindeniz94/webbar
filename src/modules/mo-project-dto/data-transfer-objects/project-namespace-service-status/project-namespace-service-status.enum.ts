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

export enum ProjectNamespaceServiceStatusEnum {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  UNKOWN = 'UNKOWN'
}

export const ProjectNamespaceServiceStatusEnum_ALL = [
  ProjectNamespaceServiceStatusEnum.PENDING,
  ProjectNamespaceServiceStatusEnum.SUCCESS,
  ProjectNamespaceServiceStatusEnum.WARNING,
  ProjectNamespaceServiceStatusEnum.ERROR,
  ProjectNamespaceServiceStatusEnum.UNKOWN
];
