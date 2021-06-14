export enum NamespaceCommandStateEnum {
  STARTED = 'STARTED',
  FAILED = 'FAILED',
  SUCCEEDED = 'SUCCEEDED',
  FINISHED = 'FINISHED',
  PENDING = 'PENDING',
  ERROR = 'ERROR'
}

export const ALL_NAMESPACE_COMMAND_STATES = [
  NamespaceCommandStateEnum.STARTED,
  NamespaceCommandStateEnum.FAILED,
  NamespaceCommandStateEnum.SUCCEEDED,
  NamespaceCommandStateEnum.FINISHED,
  NamespaceCommandStateEnum.PENDING,
  NamespaceCommandStateEnum.ERROR
];
