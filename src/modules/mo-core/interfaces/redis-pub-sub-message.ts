import {
  NamespaceCommandSocketDataEventEnum,
  NamespaceInvitationSocketDataEventEnum,
  NamespaceSocketDataEventEnum,
  NamespaceSocketEventEnum
} from '../../mo-namespace';
import { UserSocketDataEventEnum, UserSocketEventEnum } from '../../mo-user';
import { K8sNotificationSocketDataEnum, K8sNotificationSocketEventEnum } from '../enums';
import { IRedisPubSubMessageData, IRedisPubSubMessageNotificationBanner } from './redis-pub-sub-message-data';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | K8sNotificationSocketEventEnum;
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
export interface IRedisPubSubMessageK8sNotification extends IRedisPubSubMessage {
  redisChannel: 'mo_k8s_notification';
  socketEvent: K8sNotificationSocketEventEnum.NOTIFICATION;
  data: RedisPubSubMessageDataTypes<K8sNotificationSocketDataEnum, any>[];
}
