import { K8sNotificationStateEnum, MessageTypeEnum } from '../../enums';

export interface IK8sMsg {
  id: string;
  jobId: string;
  messageType: MessageTypeEnum;
  state: K8sNotificationStateEnum;
  title: string;
  type: string;
}
