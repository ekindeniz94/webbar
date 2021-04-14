import { Expose, Type } from 'class-transformer';
import { GroupDto } from '../group';
import { UserPublicDto } from '../user';

export class UserGroupPermissionDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Expose()
  groupId: string;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Expose()
  permission: string;
}
