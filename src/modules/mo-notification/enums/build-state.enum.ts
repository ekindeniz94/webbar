export enum BuildStateEnum {
  EMPTY = 'EMPTY',
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
  FAILED = 'FAILED'
}

export const ALL_BUILD_STATE_ENUM = [
  BuildStateEnum.EMPTY,
  BuildStateEnum.PENDING,
  BuildStateEnum.STARTED,
  BuildStateEnum.FINISHED,
  BuildStateEnum.FAILED
];
