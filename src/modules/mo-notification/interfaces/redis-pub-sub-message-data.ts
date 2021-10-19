import { NotificationPositionEnum, NotificationTypeEnum } from '../enums';
import { SocketDataEventEnum } from '../../mo-core';

export interface IRedisPubSubMessageData<EVENT_DATA_TYPE, EVENT_DATA = any> {
  event: EVENT_DATA_TYPE;
  data?: EVENT_DATA;
}

export interface IRedisPubSubMessageNotificationBanner {
  event: SocketDataEventEnum.NOTIFICATION_BANNER;
  header: string;
  body: string;
  type?: NotificationTypeEnum;
  position?: NotificationPositionEnum;
  delay?: number;
}
