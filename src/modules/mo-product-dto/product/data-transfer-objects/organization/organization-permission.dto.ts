import { Expose, Type } from 'class-transformer';
import { GroupDto } from '@mo/user-dto';

export class OrganizationPermissionDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Type(() => GroupDto)
  @Expose()
  organizationGroups: GroupDto[];
}
