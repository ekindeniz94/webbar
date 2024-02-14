import { IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { GroupDto, UserPublicDto } from '@mo/user-dto';
import { ProjectUserStateEnum } from '../../enums';

export class ProjectUserDto {
  @Expose()
  state: ProjectUserStateEnum;

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
  projectInvitationId: string;
}
