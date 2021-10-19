import { UserSocketDataEventEnum, UserSocketEventEnum } from '../enums';
import { IRedisPubSubMessage } from './redis-pub-sub-message';
import { RedisPubSubMessageDataTypes } from '../types';

/*********************************************
 * USER
 *********************************************/

/**
 * Hint: data type is UserSocketDataEventEnum
 */
export interface IRedisPubSubMessageUser extends IRedisPubSubMessage {
  redisChannel: 'mo_user';
  socketEvent: UserSocketEventEnum.USER_SERVICE;
  data: RedisPubSubMessageDataTypes<UserSocketDataEventEnum>[];
}

/**
 * Hint: data type is UserSocketDataEventEnum
 */
export interface IRedisPubSubMessageAuth extends IRedisPubSubMessage {
  redisChannel: 'mo_user';
  socketEvent: UserSocketEventEnum.AUTH_SERVICE;
  data: RedisPubSubMessageDataTypes<UserSocketDataEventEnum>[];
}

/**
 * Hint: data type is UserSocketDataEventEnum
 */
export interface IRedisPubSubMessageUserNotification extends IRedisPubSubMessage {
  redisChannel: 'mo_user';
  socketEvent: UserSocketEventEnum.NOTIFICATION_SERVICE;
  data: RedisPubSubMessageDataTypes<UserSocketDataEventEnum>[];
}
