import {NotificationSocketDataEventEnum, NotificationSocketEventEnum} from '../enums';
import {IRedisPubSubMessageDeprecated} from './redis-pub-sub-message';
import {RedisPubSubMessageDataTypes} from '../types';

/*********************************************
 * NOTIFICATION
 *********************************************/

/**
 * Hint: data type is NotificationSocketDataEventEnum
 */
export interface IRedisPubSubMessageNotification extends IRedisPubSubMessageDeprecated {
  redisChannel: 'mo_notification';
  socketEvent: NotificationSocketEventEnum.NOTIFICATION_SERVICE;
  data: RedisPubSubMessageDataTypes<NotificationSocketDataEventEnum>[];
}
