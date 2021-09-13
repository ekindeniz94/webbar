import { NotificationPositionEnum, NotificationTypeEnum, SocketDataEventEnum } from '../enums';

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
