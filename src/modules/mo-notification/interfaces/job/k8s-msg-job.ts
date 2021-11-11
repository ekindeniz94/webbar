import { IK8sMsgTask } from './k8s-msg-task';

export interface IK8sMsgJob {
  jobId: string;
  title: string;
  data: IK8sMsgTask[];
  finished: boolean;
}
