import { NotificationSocketDataEventEnum, NotificationSocketEventEnum } from '../enums';
import { IRedisPubSubMessage } from './redis-pub-sub-message';
import { RedisPubSubMessageDataTypes } from '../types';

/*********************************************
 * NOTIFICATION
 *********************************************/

/**
 * Hint: data type is NotificationSocketDataEventEnum
 */
export interface IRedisPubSubMessageNotification extends IRedisPubSubMessage {
  redisChannel: 'mo_notification';
  socketEvent: NotificationSocketEventEnum.NOTIFICATION_SERVICE;
  data: RedisPubSubMessageDataTypes<NotificationSocketDataEventEnum>[];
}
