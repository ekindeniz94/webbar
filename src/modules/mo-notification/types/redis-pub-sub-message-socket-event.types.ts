import {
  K8sNotificationSocketEventEnum,
  NamespaceSocketEventEnum,
  NotificationSocketEventEnum,
  UserSocketEventEnum
} from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | K8sNotificationSocketEventEnum
  | NotificationSocketEventEnum;
