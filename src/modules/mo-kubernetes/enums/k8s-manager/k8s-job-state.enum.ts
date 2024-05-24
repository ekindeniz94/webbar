export enum K8sJobStateEnum {
  STARTED = 'STARTED',
  FAILED = 'FAILED',
  SUCCEEDED = 'SUCCEEDED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  TIMEOUT = 'TIMEOUT'
}

export const K8sNotificationStateEnum_ALL = [
  K8sJobStateEnum.STARTED,
  K8sJobStateEnum.FAILED,
  K8sJobStateEnum.SUCCEEDED,
  K8sJobStateEnum.PENDING,
  K8sJobStateEnum.CANCELED,
  K8sJobStateEnum.TIMEOUT
];
