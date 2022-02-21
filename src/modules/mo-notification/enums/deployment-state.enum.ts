export enum DeploymentStateEnum {
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
  FAILED = 'FAILED'
}

export const ALL_DEPLOYMENT_STATE_ENUM = [
  DeploymentStateEnum.PENDING,
  DeploymentStateEnum.STARTED,
  DeploymentStateEnum.FINISHED,
  DeploymentStateEnum.FAILED
];
