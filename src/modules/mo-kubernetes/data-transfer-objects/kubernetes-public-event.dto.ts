import { Expose, Transform, Type } from 'class-transformer';
import { KubernetesEventMetadataDto } from './kubernetes-event-metadata.dto';
import { KubernetesEventInvolvedObjectDto } from './kubernetes-event-involved-object.dto';
import { KubernetesEventStatusReasonEnum, KubernetesEventTypeEnum } from '../enums';
import { KubernetesEventSourceDto } from './kubernetes-event-source.dto';

export class KubernetesPublicEventDto {
  @Transform(({ obj }) => obj?.metadata?.uid)
  @Expose()
  uid: string;

  @Transform(({ obj }) => obj?.metadata?.resourceVersion)
  @Expose()
  resourceVersion: string;

  @Expose()
  kind: 'Event';

  @Expose()
  type: KubernetesEventTypeEnum;

  @Expose()
  reason: KubernetesEventStatusReasonEnum;

  @Transform(({ value }) => value.replace(/azurecr.io/g, '***'))
  @Expose()
  message: string;

  @Expose()
  firstTimestamp: string;

  @Expose()
  lastTimestamp: string;
}
