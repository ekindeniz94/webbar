import { K8sNotificationStateEnum, MessageTypeEnum } from '../../enums';
import { Expose } from 'class-transformer';

export class K8sMsgDto {
  @Expose()
  id: string;

  @Expose()
  jobId: string;

  @Expose()
  startedAt: string;

  @Expose()
  title: string;

  @Expose()
  message: string;

  @Expose()
  state: K8sNotificationStateEnum;

  @Expose()
  messageType: MessageTypeEnum;

  @Expose()
  type: string;

  @Expose()
  durationMs: number;

  get isJob(): boolean {
    if (this.jobId === undefined || this.jobId === 'undefined' || this.jobId === '') {
      return true;
    }
    return false;
  }
}
