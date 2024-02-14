import { isArray, IsOptional } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { GroupDto, UserPublicDto } from '@mo/user-dto';
import { OrganizationUserStateEnum } from '../../enums';
import { ProjectUserRoleDto } from '../../../../mo-project-dto';

export class OrganizationUserDto {
  @Expose()
  state: OrganizationUserStateEnum;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @IsOptional()
  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @IsOptional()
  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Expose()
  organizationInvitationId: string;

  @Type(() => ProjectUserRoleDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  projects: ProjectUserRoleDto[];
}
