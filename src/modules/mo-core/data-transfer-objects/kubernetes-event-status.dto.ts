import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { KubernetesEventStatusLevelEnum } from '../enums/kubernetes-event-status-level.enum';
import { KubernetesEventStatusReasonEnum } from '../enums/kubernetes-event-status-reason.enum';
import { KubernetesEventStatusTypeEnum } from '../enums/kubernetes-event-status-type.enum';

export class KubernetesEventStatusDto {
  @Expose()
  type: KubernetesEventStatusTypeEnum;

  @Expose()
  level: KubernetesEventStatusLevelEnum;

  @Expose()
  reason: KubernetesEventStatusReasonEnum;

  @Expose()
  @IsOptional()
  messages?: string[];
}