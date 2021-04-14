import { Expose, Type } from 'class-transformer';
import { UserPublicDto } from '../user';

export class UserPermissionDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Expose()
  permission: string;
}
