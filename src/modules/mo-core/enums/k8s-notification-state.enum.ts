export enum K8sNotificationStateEnum {
  STARTED = 'STARTED',
  FAILED = 'FAILED',
  SUCCEEDED = 'SUCCEEDED',
  FINISHED = 'FINISHED',
  PENDING = 'PENDING',
  ERROR = 'ERROR'
}

export const K8sNotificationStateEnum_STATES = [
  K8sNotificationStateEnum.STARTED,
  K8sNotificationStateEnum.FAILED,
  K8sNotificationStateEnum.SUCCEEDED,
  K8sNotificationStateEnum.FINISHED,
  K8sNotificationStateEnum.PENDING,
  K8sNotificationStateEnum.ERROR
];
