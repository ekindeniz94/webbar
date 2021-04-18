import { PermissionModel } from './permission.model';
import { UserGroupPermissionDto } from '../data-transfer-objects';

export class UserGroupPermissionModel extends PermissionModel {
  constructor(permissions: UserGroupPermissionDto[]) {
    super();
    this._permissions = permissions.filter((item: UserGroupPermissionDto) => item.groupId && item.userId);
  }

  public getPermission(groups: string[] | null, permissions: string[]): UserGroupPermissionDto | undefined {
    return this._permissions.find(
      (modelPermission: UserGroupPermissionDto) =>
        permissions.find((permission: string) => modelPermission.permission === permission) &&
        (groups === null || groups.find((group: string) => modelPermission.groupId === group))
    );
  }

  public hasPermission(groups: string[], permissions: string[]): boolean {
    return !!this.getPermission(groups, permissions);
  }

  public getPermissions(groups: string[] | null, permissions: string[]): UserGroupPermissionDto[] {
    return this._permissions.filter(
      (modelPermission: UserGroupPermissionDto) =>
        permissions.find((permission: string) => modelPermission.permission === permission) &&
        (groups === null || groups.find((group: string) => modelPermission.groupId === group))
    );
  }
}
