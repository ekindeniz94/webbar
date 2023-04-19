import {
  ChangelogSocketEventEnum,
  K8sNotificationSocketEventEnum,
  NotificationSocketEventEnum,
  PaymentSocketEventEnum,
  UserSocketEventEnum
} from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | UserSocketEventEnum
  | PaymentSocketEventEnum
  | K8sNotificationSocketEventEnum
  // | KubernetesEventSocketEventEnum
  | NotificationSocketEventEnum
  | ChangelogSocketEventEnum;
