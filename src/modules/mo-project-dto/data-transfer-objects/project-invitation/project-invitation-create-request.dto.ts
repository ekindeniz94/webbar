import { IsEmail, IsNotEmpty, isString, IsString, MaxLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { StripTags } from '@mogenius/js-utils';
import { USER_CONST } from '@mogenius/user-dto';

export class ProjectInvitationCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(USER_CONST.EMAIL.MAX)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, USER_CONST.EMAIL.MAX))
  @StripTags()
  @Expose()
  email: string;
}
