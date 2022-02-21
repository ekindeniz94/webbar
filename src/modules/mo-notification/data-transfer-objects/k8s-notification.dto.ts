import { Expose } from 'class-transformer';
import { K8sNotificationStateEnum } from '../enums';

export class K8sNotificationDto {
  @Expose()
  id: string;

  @Expose()
  jobId: string;

  @Expose()
  namespaceId: string;

  @Expose()
  stageId?: string;

  @Expose()
  serviceId?: string;

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
  position: number;

  @Expose()
  positionOf: number;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitMessage: string;

  @Expose()
  commitHash: string;

  @Expose()
  buildId?: string;

  @Expose()
  buildState?: string; // Pending, Started, Finished, Failed

  @Expose()
  deploymentState?: string; // Pending, Started, Finished, Failed
}
