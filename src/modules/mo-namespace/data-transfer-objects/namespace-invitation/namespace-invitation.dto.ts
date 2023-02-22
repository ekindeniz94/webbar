import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GroupDto, UserPublicDto } from '@mo/user-dto';

export class NamespaceInvitationDto {
  @Expose()
  id: string;

  @Expose()
  namespaceName: string;

  @Expose()
  namespaceRole: string;

  @IsOptional()
  @Type(() => UserPublicDto)
  @Expose()
  fromUser: UserPublicDto;

  @IsOptional()
  @Type(() => UserPublicDto)
  @Expose()
  toUser: UserPublicDto;

  @IsOptional()
  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
