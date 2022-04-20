import { Expose, Transform } from 'class-transformer';
import { KubernetesEventStatusReasonEnum, KubernetesEventTypeEnum } from '../enums';

export class KubernetesPublicEventDto {
  @Transform(({ value, obj }) => value ?? obj?.metadata?.uid)
  @Expose()
  uid: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.creationTimestamp)
  @Expose()
  creationTimestamp: string;

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
