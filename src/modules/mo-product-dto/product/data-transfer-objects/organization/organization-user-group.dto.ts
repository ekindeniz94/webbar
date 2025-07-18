import { Expose, Type } from 'class-transformer';
import { GroupDto, UserPublicDto } from '@mogenius/user-dto';

export class OrganizationUserGroupDto {
  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
