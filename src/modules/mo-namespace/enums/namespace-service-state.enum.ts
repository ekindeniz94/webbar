export enum NamespaceServiceStateEnum {
  PENDING = 'PENDING',
  STOPPED = 'STOPPED',
  DEPLOYING = 'DEPLOYING',
  RUNNING = 'RUNNING',
  ERROR = 'ERROR'
  // CREATED = 'CREATED',
  // WARNING = 'WARNING',
  // INITIALIZING = 'INITIALIZING',
  // BUILDING = 'BUILDING',
  // BUILD_FAILED = 'BUILD_FAILED',
  // DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
  // DEPLOYED = 'DEPLOYED'
}

export const ALL_NamespaceServiceStates = [
  NamespaceServiceStateEnum.PENDING,
  NamespaceServiceStateEnum.STOPPED,
  NamespaceServiceStateEnum.DEPLOYING,
  NamespaceServiceStateEnum.RUNNING,
  NamespaceServiceStateEnum.ERROR
  // NamespaceServiceStateEnum.CREATED,
  // NamespaceServiceStateEnum.WARNING,
  // NamespaceServiceStateEnum.INITIALIZING,
  // NamespaceServiceStateEnum.BUILDING,
  // NamespaceServiceStateEnum.BUILD_FAILED,
  // NamespaceServiceStateEnum.DEPLOYMENT_FAILED,
  // NamespaceServiceStateEnum.DEPLOYED,
];
