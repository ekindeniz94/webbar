import { Expose } from 'class-transformer';
import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../enums';

export class K8sManagerTrafficMessageDto {
  @Expose()
  podName: string;

  @Expose()
  receiveBytes: string;

  @Expose()
  transmitBytes: string;
}
