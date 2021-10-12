import { Expose } from 'class-transformer';
import { UserDto } from '../../mo-user';
import { NotificationContentTypeEnum, NotificationPositionEnum, NotificationTypeEnum } from '../enums';
import { BaseEntityDto } from './base.entity.dto';

export class NotificationDto {
  @Expose()
  id: string;

  @Expose()
  user: UserDto;

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
