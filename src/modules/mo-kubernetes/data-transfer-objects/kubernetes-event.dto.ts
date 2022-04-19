import { Expose, Type } from 'class-transformer';
import { KubernetesEventMetadataDto } from './kubernetes-event-metadata.dto';
import { KubernetesEventInvolvedObjectDto } from './kubernetes-event-involved-object.dto';
import { KubernetesEventStatusReasonEnum, KubernetesEventTypeEnum } from '../enums';
import { KubernetesEventSourceDto } from './kubernetes-event-source.dto';

export class KubernetesEventDto {
  @Expose()
  kind: 'Event';

  @Expose()
  apiVersion: 'v1';

  @Type(() => KubernetesEventMetadataDto)
  @Expose()
  metadata: KubernetesEventMetadataDto;

  @Type(() => KubernetesEventInvolvedObjectDto)
  @Expose()
  involvedObject: KubernetesEventInvolvedObjectDto;

  @Expose()
  reason: KubernetesEventStatusReasonEnum;

  @Expose()
  message: string;

  @Type(() => KubernetesEventSourceDto)
  @Expose()
  source: KubernetesEventSourceDto;

  @Expose()
  firstTimestamp: string;

  @Expose()
  lastTimestamp: string;

  @Expose()
  count: number;

  @Expose()
  type: KubernetesEventTypeEnum;

  @Expose()
  eventTime: string;

  @Expose()
  reportingComponent: string;

  @Expose()
  reportingInstance: string;
}
