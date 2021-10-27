import { IK8sMsgTaskList } from './k8s-msg-task-list';

export interface IK8sMsgJobList {
  jobId: string;
  data: IK8sMsgTaskList[];
  finished: boolean;
}
