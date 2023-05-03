import { Expose } from 'class-transformer';
import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../../../enums';

export class K8sNotificationDto {
  @Expose()
  id: string;

  @Expose()
  jobId: string;

  @Expose()
  projectId: string;

  @Expose()
  namespaceId?: string;

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
  commitAuthor?: string;

  @Expose()
  commitMessage?: string;

  @Expose()
  commitHash?: string;

  @Expose()
  buildId?: string;

  @Expose()
  buildState?: BuildStateEnum;

  @Expose()
  deploymentState?: DeploymentStateEnum;
}
