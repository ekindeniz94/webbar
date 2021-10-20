import { Expose } from 'class-transformer';
import { UserPublicDto } from '../../mo-user';
import { MessageTypeEnum, NotificationContentTypeEnum, NotificationTypeEnum } from '../enums';
import { BaseEntityDto } from '../../mo-core';

export class NotificationDto extends BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  user: UserPublicDto;

  @Expose()
  type: NotificationTypeEnum;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  contentType: NotificationContentTypeEnum;

  @Expose()
  extraData: any;

  @Expose()
  messageType: MessageTypeEnum;
}
