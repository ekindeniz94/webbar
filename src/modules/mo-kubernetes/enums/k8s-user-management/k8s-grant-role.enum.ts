export enum K8sGrantRoleEnum {
  VIEWER = 'viewer',
  EDITOR = 'editor',
  ADMIN = 'admin'
}

export const K8S_GRANT_ROLE_HIERARCHY = {
  admin: [K8sGrantRoleEnum.ADMIN, K8sGrantRoleEnum.EDITOR, K8sGrantRoleEnum.VIEWER],
  editor: [K8sGrantRoleEnum.EDITOR, K8sGrantRoleEnum.VIEWER],
  viewer: [K8sGrantRoleEnum.VIEWER]
};
