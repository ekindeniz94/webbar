import { Expose, Type } from 'class-transformer';
import { GroupDto } from '../group';

export class GroupPermissionDto {
  @Expose()
  id: string;

  @Expose()
  groupId: string;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Expose()
  permission: string;
}
