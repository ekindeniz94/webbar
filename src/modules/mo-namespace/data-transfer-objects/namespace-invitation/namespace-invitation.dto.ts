import { Expose, Type } from 'class-transformer';
import { GroupDto, UserPublicDto } from '../../../mo-user';
import { IsOptional } from 'class-validator';

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
