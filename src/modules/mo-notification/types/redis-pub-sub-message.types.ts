import {
  IRedisPubSubMessage,
  IRedisPubSubMessageAuth,
  IRedisPubSubMessageK8sNotification,
  IRedisPubSubMessageNamespace,
  IRedisPubSubMessageNamespaceInvitation,
  IRedisPubSubMessageUser
} from '../interfaces';
import { IRedisPubSubMessageNotification } from '../interfaces/notification-redis-pub-sub-message';

export type RedisPubSubMessageTypes =
  // | IRedisPubSubMessage
  | IRedisPubSubMessageK8sNotification
  | IRedisPubSubMessageNamespace
  | IRedisPubSubMessageNamespaceInvitation
  | IRedisPubSubMessageNotification
  | IRedisPubSubMessageUser
  | IRedisPubSubMessageAuth;
