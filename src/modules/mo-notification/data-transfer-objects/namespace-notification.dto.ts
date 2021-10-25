import { NotificationDto } from './notification.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDto, NamespaceServiceDto } from '../../mo-namespace';
import { K8sNotificationStateEnum } from '../enums';

export class NamespaceNotificationDto extends NotificationDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace?: NamespaceDto;

  @Type(() => NamespaceServiceDto)
  @Expose()
  namespaceService?: NamespaceServiceDto;

  @Transform(({ value }) => +value)
  @Expose()
  subNotificationCount: number;

  @Expose()
  commandId: string;

  @Expose()
  notificationState: K8sNotificationStateEnum;
}
