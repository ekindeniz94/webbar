import { K8sNotificationStateEnum, MessageTypeEnum } from '../../enums';

export interface IK8sMsg {
  id: string;
  jobId: string;
  startedAt: string;
  title: string;
  message: string;
  state: K8sNotificationStateEnum;
  messageType: MessageTypeEnum;
  type: string;
  durationMs: number;
}
