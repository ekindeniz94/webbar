import {
  ChangelogSocketEventEnum,
  K8sNotificationSocketEventEnum,
  NamespaceSocketEventEnum2,
  NotificationSocketEventEnum,
  PaymentSocketEventEnum,
  UserSocketEventEnum
} from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum2
  | UserSocketEventEnum
  | PaymentSocketEventEnum
  | K8sNotificationSocketEventEnum
  // | KubernetesEventSocketEventEnum
  | NotificationSocketEventEnum
  | ChangelogSocketEventEnum;
