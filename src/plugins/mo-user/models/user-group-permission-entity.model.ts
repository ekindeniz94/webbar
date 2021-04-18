import { UserGroupPermissionDto } from '../data-transfer-objects';
import { UserPermissionModel } from './user-permission.model';
import { GroupPermissionModel } from './group-permission.model';
import { UserGroupPermissionModel } from './user-group-permission.model';
import { plainToClass } from 'class-transformer';
import { PermissionEnum } from '../enums';

export class UserGroupPermissionEntityModel {
  private readonly _userPermissionModel: UserPermissionModel;
  private readonly _groupPermissionModel: GroupPermissionModel;
  private readonly _userGroupPermissionModel: UserGroupPermissionModel;
  private readonly _adminPermissionList: string[];
  private readonly _addPermissionList: string[];
  private readonly _changePermissionList: string[];
  private readonly _deletePermissionList: string[];
  private readonly _viewPermissionList: string[];

  constructor(private readonly _permissions: UserGroupPermissionDto[]) {
    this._permissions = this._permissions.map((item: UserGroupPermissionDto) =>
      plainToClass(UserGroupPermissionDto, item, { excludeExtraneousValues: true })
    );

    /**
     VIEW = 'view'
     */

    this._adminPermissionList = this.getPermissionListByPermissionEnum(PermissionEnum.ADMIN).map(
      (item: UserGroupPermissionDto) => item.permission
    );

    this._addPermissionList = this.getPermissionListByPermissionEnum(PermissionEnum.ADD).map(
      (item: UserGroupPermissionDto) => item.permission
    );

    this._changePermissionList = this.getPermissionListByPermissionEnum(PermissionEnum.CHANGE).map(
      (item: UserGroupPermissionDto) => item.permission
    );

    this._deletePermissionList = this.getPermissionListByPermissionEnum(PermissionEnum.DELETE).map(
      (item: UserGroupPermissionDto) => item.permission
    );

    this._viewPermissionList = this.getPermissionListByPermissionEnum(PermissionEnum.VIEW).map(
      (item: UserGroupPermissionDto) => item.permission
    );

    this._userPermissionModel = new UserPermissionModel(_permissions);
    this._groupPermissionModel = new GroupPermissionModel(_permissions);
    this._userGroupPermissionModel = new UserGroupPermissionModel(_permissions);
  }

  public getPermissionListByPermissionEnum(value: PermissionEnum): UserGroupPermissionDto[] {
    return this._permissions.filter((item: UserGroupPermissionDto) => item.permission.indexOf(`${value}__`) !== -1);
  }

  /**
   *
   * @param {string[]} permissions
   * @return {}
   */
  public getPermission(permissions: string[]): UserGroupPermissionDto | undefined {
    if (!permissions) {
      return undefined;
    }
    return this._permissions.find((item1: UserGroupPermissionDto) =>
      permissions.find((item2: string) => item1.permission === item2)
    );
  }

  public hasPermission(permissions: string[]): boolean {
    return !!this.getPermission(permissions);
  }

  get permissions(): UserGroupPermissionDto[] {
    return this._permissions;
  }

  get userPermissionModel(): UserPermissionModel {
    return this._userPermissionModel;
  }

  get groupPermissionModel(): GroupPermissionModel {
    return this._groupPermissionModel;
  }

  get userGroupPermissionModel(): UserGroupPermissionModel {
    return this._userGroupPermissionModel;
  }

  get adminPermissionList(): string[] {
    return this._adminPermissionList;
  }

  get addPermissionList(): string[] {
    return this._addPermissionList;
  }

  get changePermissionList(): string[] {
    return this._changePermissionList;
  }

  get deletePermissionList(): string[] {
    return this._deletePermissionList;
  }

  get viewPermissionList(): string[] {
    return this._viewPermissionList;
  }
}
