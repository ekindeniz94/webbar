import { Expose, Type } from 'class-transformer';
import { GroupPermissionDto, UserGroupPermissionDto, UserPermissionDto } from '../user-group-permission';
import { UserDto } from './user.dto';

export class UserWithPermissionsDto extends UserDto {
  @Type(() => GroupPermissionDto)
  @Expose()
  userPermissions: UserPermissionDto[];

  @Type(() => UserGroupPermissionDto)
  @Expose()
  userGroupPermissions: UserGroupPermissionDto[];
}
