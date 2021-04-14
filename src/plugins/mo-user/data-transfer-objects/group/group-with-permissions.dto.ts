import { Expose, Type } from 'class-transformer';
import { GroupPermissionDto, UserGroupPermissionDto } from '../user-group-permission';

export class GroupWithPermissionsDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Type(() => GroupPermissionDto)
  @Expose()
  groupPermissions: GroupPermissionDto[];

  @Type(() => UserGroupPermissionDto)
  @Expose()
  userGroupPermissions: UserGroupPermissionDto[];
}
