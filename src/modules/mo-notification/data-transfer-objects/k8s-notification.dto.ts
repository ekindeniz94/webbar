import { Expose } from 'class-transformer';
import { K8sNotificationStateEnum, MessageTypeEnum, NotificationTypeEnum } from '../enums';

export class K8sNotificationDto {
  @Expose()
  id: string;

  @Expose()
  namespaceId: string;

  @Expose()
  serviceId: string;

  @Expose()
  title: string;

  @Expose()
  message: string;

  @Expose()
  startedAt: string;

  @Expose()
  state: K8sNotificationStateEnum;

  @Expose()
  durationMs: number;

  @Expose()
  type: NotificationTypeEnum;

  @Expose()
  messageType: MessageTypeEnum;
}
