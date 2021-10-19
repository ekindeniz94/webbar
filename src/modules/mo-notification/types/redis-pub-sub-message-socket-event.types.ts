import { K8sNotificationSocketEventEnum, NamespaceSocketEventEnum, UserSocketEventEnum } from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | K8sNotificationSocketEventEnum;