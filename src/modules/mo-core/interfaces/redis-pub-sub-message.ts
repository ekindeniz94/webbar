import {
  NamespaceCommandSocketDataEventEnum,
  NamespaceInvitationSocketDataEventEnum,
  NamespaceSocketDataEventEnum,
  NamespaceSocketEventEnum
} from '../../mo-namespace';
import { UserSocketDataEventEnum, UserSocketEventEnum } from '../../mo-user';
import { IRedisPubSubMessageData, IRedisPubSubMessageNotificationBanner } from './redis-pub-sub-message-data';

export type RedisPubSubMessageSocketEventTypes = NamespaceSocketEventEnum | UserSocketEventEnum;
export type RedisPubSubMessageTypes =
  | IRedisPubSubMessageNamespace
  | IRedisPubSubMessageNamespaceInvitation
  | IRedisPubSubMessageNamespaceCommand;
export type RedisPubSubMessageDataTypes<T> = IRedisPubSubMessageData<T> | IRedisPubSubMessageNotificationBanner;

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
