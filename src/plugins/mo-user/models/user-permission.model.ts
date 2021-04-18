import { PermissionModel } from './permission.model';
import { UserGroupPermissionDto } from '../data-transfer-objects';

/**
 * only userId is defined.
 * groupId is undefined.
 *
 */
export class UserPermissionModel extends PermissionModel {
  constructor(permissions: UserGroupPermissionDto[]) {
    super();
    this._permissions = permissions.filter((item: UserGroupPermissionDto) => !item.groupId && item.userId);
  }

  public getPermission(permissions: string[]): UserGroupPermissionDto | undefined {
    return this._permissions.find((modelPermission: UserGroupPermissionDto) =>
      permissions.find((permission: string) => modelPermission.permission === permission)
    );
  }

  public hasPermission(permissions: string[]): boolean {
    return !!this.getPermission(permissions);
  }
}