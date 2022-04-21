import {
  ChangelogSocketEventEnum,
  K8sNotificationSocketEventEnum,
  NamespaceSocketEventEnum,
  NotificationSocketEventEnum,
  PaymentSocketEventEnum,
  UserSocketEventEnum
} from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | PaymentSocketEventEnum
  | K8sNotificationSocketEventEnum
  // | KubernetesEventSocketEventEnum
  | NotificationSocketEventEnum
  | ChangelogSocketEventEnum;
