import { Expose, Type } from 'class-transformer';
import { KubernetesEventKindEnum } from '../enums/kubernetes-event-kind.enum';

export class KubernetesEventMetaDto {
  @Expose()
  kind: KubernetesEventKindEnum;

  @Expose()
  name: string;

  @Expose()
  namespace: string;

  @Expose()
  cluster: string;
}