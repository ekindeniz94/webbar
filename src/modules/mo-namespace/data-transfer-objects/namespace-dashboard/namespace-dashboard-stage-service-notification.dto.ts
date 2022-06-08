import { Expose, Transform, Type } from 'class-transformer';
import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../../../mo-notification';
import moment from 'moment';

export class NamespaceDashboardStageServiceNotificationDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @Expose()
  title: string;

  @Expose()
  message: string;

  @Expose()
  jobId: string;

  @Expose()
  taskId: string;

  @Expose()
  state: K8sNotificationStateEnum;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  startedAt: Date;

  @Type(() => Number)
  @Expose()
  durationMs: number;

  @Expose()
  buildId?: string;

  @Expose()
  buildState?: BuildStateEnum;

  @Expose()
  deploymentState?: DeploymentStateEnum;
}
