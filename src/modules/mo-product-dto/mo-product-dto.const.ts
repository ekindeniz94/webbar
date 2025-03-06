import { KUBERNETES_CONST } from '../mo-kubernetes';
import { MO_PRODUCT_ROLES } from './product/enums/roles.enum';

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

export const OrganizationScopes = [
  `organization:${MO_PRODUCT_ROLES.ORGANIZATION_ADMIN}`,
  `organization:${MO_PRODUCT_ROLES.ORGANIZATION_EDITOR}`,
  `organization:${MO_PRODUCT_ROLES.ORGANIZATION_VIEW}`
];
