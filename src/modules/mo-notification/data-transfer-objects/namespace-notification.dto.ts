import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDto, NamespaceStageDto } from '../../mo-namespace';
import { isEnum, isString } from 'class-validator';
import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../enums';
import moment from 'moment';
import { ProjectNamespaceServiceDto, ProjectNamespaceServicePodDto } from '../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';

export class NamespaceNotificationDto extends BaseEntityDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => NamespaceStageDto)
  @Expose()
  namespaceStage: NamespaceStageDto;

  @Type(() => ProjectNamespaceServiceDto)
  @Expose()
  namespaceService: ProjectNamespaceServiceDto;

  @Type(() => ProjectNamespaceServicePodDto)
  @Expose()
  namespaceServicePod: ProjectNamespaceServicePodDto;

  @Expose()
  title: string;

  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 512))
  @Expose()
  message: string | null;

  @Expose()
  jobId: string;

  @Expose()
  taskId: string | null;

  @Transform(({ value }) =>
    value && isEnum(value, K8sNotificationStateEnum) ? value : K8sNotificationStateEnum.PENDING
  )
  @Expose()
  state: K8sNotificationStateEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startedAt: Date;

  @Type(() => Number)
  @Expose()
  durationMs: number;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitMessage: string;

  @Expose()
  commitHash: string;

  @Expose()
  buildId?: string;

  @Expose()
  buildState?: BuildStateEnum;

  @Expose()
  deploymentState?: DeploymentStateEnum;

  get durationSec(): number {
    return +(this.durationMs / 1000).toFixed(2);
  }
}
