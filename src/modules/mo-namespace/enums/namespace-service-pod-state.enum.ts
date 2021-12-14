export enum NamespaceServicePodStateEnum {
  TERMINATING = 'TERMINATING',
  RUNNING = 'RUNNING',
  CREATED = 'CREATED',
  ERROR = 'ERROR'
}

export const ALL_NamespaceServicePodStates = [
  NamespaceServicePodStateEnum.TERMINATING,
  NamespaceServicePodStateEnum.RUNNING,
  NamespaceServicePodStateEnum.CREATED,
  NamespaceServicePodStateEnum.ERROR
];
