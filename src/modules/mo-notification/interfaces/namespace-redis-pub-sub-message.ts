import { IRedisPubSubMessage } from './redis-pub-sub-message';
import {
  NamespaceInvitationSocketDataEventEnum,
  NamespaceSocketDataEventEnum,
  NamespaceSocketEventEnum
} from '../enums';
import { RedisPubSubMessageDataTypes } from '../types';

/*********************************************
 * USER
 *********************************************/

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
