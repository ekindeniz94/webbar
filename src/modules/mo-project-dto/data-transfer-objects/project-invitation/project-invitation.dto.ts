import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { GroupDto, UserPublicDto } from '@mo/user-dto';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '@mo/js-utils';

export class ProjectInvitationDto {
  @Expose()
  id: string;

  @Expose()
  projectName: string;

  @Expose()
  projectRole: string;

  @Type(() => UserPublicDto)
  @Expose()
  fromUser: UserPublicDto;

  @Type(() => UserPublicDto)
  @Expose()
  toUser: UserPublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @StripTags()
  @Expose()
  email: string;
}
