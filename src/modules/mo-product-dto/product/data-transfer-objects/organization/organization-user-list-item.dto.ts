import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { GroupDto, UserPublicDto } from '@mo/user-dto';
import { ProjectDisplayNameDto } from '../../../../mo-project-dto/data-transfer-objects/project/project-display-name.dto';
import { isArray } from 'class-validator';

export class OrganizationUserListItemDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  @Expose()
  organizationName: string;

  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Type(() => ProjectDisplayNameDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  userProjectList: ProjectDisplayNameDto[];
}
