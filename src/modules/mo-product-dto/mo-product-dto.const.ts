import { KUBERNETES_CONST } from '../mo-kubernetes';

export const PRODUCT_CONST = {
  CLUSTER: {
    DISPLAY_NAME: {
      MIN: 3,
      MAX: 255,
      MATCHES: /^([a-z])([a-z0-9-])/
    },
    NAME: {
      MIN: KUBERNETES_CONST.LABEL_NAME.MIN,
      MAX: KUBERNETES_CONST.LABEL_NAME.MAX
    }
  }
};