export enum ProjectNamespaceServiceStateEnum {
  PENDING = 'PENDING',
  STOPPED = 'STOPPED',
  DEPLOYING = 'DEPLOYING',
  RUNNING = 'RUNNING',
  ERROR = 'ERROR',
  // CREATED = 'CREATED',
  WARNING = 'WARNING'
  // INITIALIZING = 'INITIALIZING',
  // BUILDING = 'BUILDING',
  // BUILD_FAILED = 'BUILD_FAILED',
  // DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
  // DEPLOYED = 'DEPLOYED'
  //
}

export const ProjectNamespaceServiceStateEnum_ALL = [
  ProjectNamespaceServiceStateEnum.PENDING,
  ProjectNamespaceServiceStateEnum.STOPPED,
  ProjectNamespaceServiceStateEnum.DEPLOYING,
  ProjectNamespaceServiceStateEnum.RUNNING,
  ProjectNamespaceServiceStateEnum.ERROR,
  // ProjectNamespaceServiceStateEnum.CREATED,
  ProjectNamespaceServiceStateEnum.WARNING
  // ProjectNamespaceServiceStateEnum.INITIALIZING,
  // ProjectNamespaceServiceStateEnum.BUILDING,
  // ProjectNamespaceServiceStateEnum.BUILD_FAILED,
  // ProjectNamespaceServiceStateEnum.DEPLOYMENT_FAILED,
  // ProjectNamespaceServiceStateEnum.DEPLOYED,
];
