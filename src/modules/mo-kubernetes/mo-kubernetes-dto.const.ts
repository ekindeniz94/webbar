import { K8sBuildTaskEnum } from './enums';

export const KUBERNETES_CONST = {
  LABEL_NAME: {
    MIN: 3,
    MAX: 50
  }
};

export const ALLOWED_BUILD_TASKS = [
  K8sBuildTaskEnum.LS,
  K8sBuildTaskEnum.CLONE,
  K8sBuildTaskEnum.BUILD,
  K8sBuildTaskEnum.PUSH
];
