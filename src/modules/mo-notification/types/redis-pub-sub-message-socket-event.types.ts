import {
  ChangelogSocketEventEnum,
  K8sNotificationSocketEventEnum,
  // KubernetesEventSocketEventEnum,
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
