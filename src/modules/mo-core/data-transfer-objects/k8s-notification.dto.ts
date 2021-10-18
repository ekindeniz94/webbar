import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { K8sNotificationStateEnum } from '../enums';

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

  @IsEnum(K8sNotificationStateEnum)
  @Expose()
  state: K8sNotificationStateEnum;

  @Expose()
  durationMs: number;
}
