import { UserGroupPermissionDto } from '../data-transfer-objects';

export class PermissionModel {
  protected _permissions: UserGroupPermissionDto[];

  public permissionsStr(): string[] {
    return this._permissions.map((item: UserGroupPermissionDto) => item.permission);
  }

  get permissions(): UserGroupPermissionDto[] {
    return this._permissions;
  }
}
