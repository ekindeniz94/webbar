export enum K8sBuildStateEnum {
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED'
}

export const BuildStateEnum_ALL = [
  K8sBuildStateEnum.PENDING,
  K8sBuildStateEnum.STARTED,
  K8sBuildStateEnum.SUCCEEDED,
  K8sBuildStateEnum.FAILED
];
