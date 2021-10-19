import { Expose } from 'class-transformer';
import { UserPublicDto } from '../../mo-user';
import { NotificationContentTypeEnum, NotificationPositionEnum, NotificationTypeEnum } from '../enums';

export class NotificationDto {
  @Expose()
  id: string;

  @Expose()
  user: UserPublicDto;

  @Expose()
  type: NotificationTypeEnum;

  @Expose()
  position: NotificationPositionEnum;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  contentType: NotificationContentTypeEnum;

  @Expose()
  extraData: any;
}
