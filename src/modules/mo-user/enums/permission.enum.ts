export enum PermissionEnum {
  // NO = '-',
  ADMIN = 'admin',
  ADD = 'add',
  CHANGE = 'change',
  DELETE = 'delete',
  VIEW = 'view'
}

export const ALL_PERMISSIONS = [
  PermissionEnum.ADMIN,
  PermissionEnum.ADD,
  PermissionEnum.CHANGE,
  PermissionEnum.DELETE,
  PermissionEnum.VIEW
];
