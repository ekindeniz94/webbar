import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { GroupDto, USER_CONST, UserPublicDto } from '@mogenius/user-dto';
import { StripTags } from '@mogenius/js-utils';

export class OrganizationInvitationDto {
  @Expose()
  id: string;

  @Expose()
  organizationName: string;

  @Expose()
  organizationRole: string;

  @Type(() => UserPublicDto)
  @Expose()
  fromUser: UserPublicDto;

  @Type(() => UserPublicDto)
  @Expose()
  toUser: UserPublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;

  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, USER_CONST.EMAIL.MAX))
  @StripTags()
  @Expose()
  email: string;
}
