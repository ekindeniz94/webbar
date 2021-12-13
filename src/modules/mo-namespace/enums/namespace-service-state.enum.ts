export enum NamespaceServiceStateEnum {
  CREATED = 'CREATED',
  STOPPED = 'STOPPED',
  RUNNING = 'RUNNING',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  INITIALIZING = 'INITIALIZING',
  BUILDING = 'BUILDING',
  BUILD_FAILED = 'BUILD_FAILED',
  DEPLOYING = 'DEPLOYING',
  DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
  DEPLOYED = 'DEPLOYED'
}

export const ALL_NamespaceServiceStates = [
  NamespaceServiceStateEnum.CREATED,
  NamespaceServiceStateEnum.STOPPED,
  NamespaceServiceStateEnum.RUNNING,
  NamespaceServiceStateEnum.WARNING,
  NamespaceServiceStateEnum.ERROR,
  NamespaceServiceStateEnum.INITIALIZING,
  NamespaceServiceStateEnum.BUILDING,
  NamespaceServiceStateEnum.BUILD_FAILED,
  NamespaceServiceStateEnum.DEPLOYING,
  NamespaceServiceStateEnum.DEPLOYMENT_FAILED,
  NamespaceServiceStateEnum.DEPLOYED,
];
