import { GroupDto, UserPublicDto } from '../../../mo-user';
import { SentInvitationNamespaceDto } from './sent-invitation-namespace.dto';
import { Expose, Type } from 'class-transformer';

export class SentInvitationDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Type(() => SentInvitationNamespaceDto)
  @Expose()
  namespace: SentInvitationNamespaceDto;

  @Type(() => UserPublicDto)
  @Expose()
  fromUser: UserPublicDto;

  @Type(() => UserPublicDto)
  @Expose()
  toUser: UserPublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
