import {
  NamespaceCommandSocketDataEventEnum,
  NamespaceInvitationSocketDataEventEnum,
  NamespaceSocketDataEventEnum,
  NamespaceSocketEventEnum
} from '../../mo-namespace';
import { UserSocketDataEventEnum, UserSocketEventEnum } from '../../mo-user';
import { IRedisPubSubMessageData, IRedisPubSubMessageNotificationBanner } from './redis-pub-sub-message-data';
import { NotificationSocketDataEnum, NotificationSocketEventEnum } from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | NotificationSocketEventEnum;
export type RedisPubSubMessageTypes =
  | IRedisPubSubMessageNamespace
  | IRedisPubSubMessageNamespaceInvitation
  | IRedisPubSubMessageNamespaceCommand;
export type RedisPubSubMessageDataTypes<EVENT_DATA_TYPE, EVENT_DATA = any> =
  | IRedisPubSubMessageData<EVENT_DATA_TYPE, EVENT_DATA>
  | IRedisPubSubMessageNotificationBanner;

interface IRedisPubSubMessage {
  toUserId: string;
  redisChannel: string;
  socketEvent: RedisPubSubMessageSocketEventTypes;
}

/***
 * NAMESPACE
 */
/**
 * Hint: data type is NamespaceSocketDataEventEnum
 */
export interface IRedisPubSubMessageNamespace extends IRedisPubSubMessage {
  redisChannel: 'mo_namespace';
  socketEvent: NamespaceSocketEventEnum.NAMESPACE_SERVICE;
  data: RedisPubSubMessageDataTypes<NamespaceSocketDataEventEnum>[];
}

/**
 * Hint: data type is NamespaceInvitationSocketDataEventEnum
 */
export interface IRedisPubSubMessageNamespaceInvitation extends IRedisPubSubMessage {
  redisChannel: 'mo_namespace';
  socketEvent: NamespaceSocketEventEnum.NAMESPACE_INVITATION_SERVICE;
  data: RedisPubSubMessageDataTypes<NamespaceInvitationSocketDataEventEnum>[];
}

/**
 * Hint: data type is NamespaceCommandSocketDataEventEnum
 */
export interface IRedisPubSubMessageNamespaceCommand extends IRedisPubSubMessage {
  redisChannel: 'mo_namespace';
  socketEvent: NamespaceSocketEventEnum.NAMESPACE_COMMAND_SERVICE;
  data: RedisPubSubMessageDataTypes<NamespaceCommandSocketDataEventEnum>[];
}

/***
 * USER
 */

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

/**
 * Hint: data type is NotificationSocketDataEnum
 */
export interface IRedisPubSubMessageNotification extends IRedisPubSubMessage {
  redisChannel: 'mo_notification';
  socketEvent: NotificationSocketEventEnum.NOTIFICATION;
  data: RedisPubSubMessageDataTypes<NotificationSocketDataEnum, any>[];
}
