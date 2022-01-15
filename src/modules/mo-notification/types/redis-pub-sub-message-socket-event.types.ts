import {
  ChangelogSocketEventEnum,
  K8sNotificationSocketEventEnum,
  KubernetesEventSocketEventEnum,
  NamespaceSocketEventEnum,
  NotificationSocketEventEnum,
  UserSocketEventEnum
} from '../enums';

export type RedisPubSubMessageSocketEventTypes =
  | NamespaceSocketEventEnum
  | UserSocketEventEnum
  | K8sNotificationSocketEventEnum
  | KubernetesEventSocketEventEnum
  | NotificationSocketEventEnum
  | ChangelogSocketEventEnum;
