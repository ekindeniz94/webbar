import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDto, NamespaceServiceDto, NamespaceServicePodDto, NamespaceStageDto } from '../../mo-namespace';
import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../enums';
import { BaseEntityDto } from '../../mo-core';
import {isString} from "class-validator";

export class NamespaceNotificationDto extends BaseEntityDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => NamespaceStageDto)
  @Expose()
  namespaceStage: NamespaceStageDto;

  @Type(() => NamespaceServiceDto)
  @Expose()
  namespaceService: NamespaceServiceDto;

  @Type(() => NamespaceServicePodDto)
  @Expose()
  namespaceServicePod: NamespaceServicePodDto;

  @Expose()
  title: string;

  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 512))
  @Expose()
  message: string | null;

  @Expose()
  jobId: string;

  @Expose()
  taskId: string | null;

  @Expose()
  state: K8sNotificationStateEnum;

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
