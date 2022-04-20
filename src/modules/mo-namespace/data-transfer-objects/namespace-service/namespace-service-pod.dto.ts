import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { KubernetesPublicEventDto } from '../../../mo-kubernetes';

export class NamespaceServicePodDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  k8sName: string;

  @Expose()
  state: string;

  @Type(() => KubernetesPublicEventDto)
  @Expose()
  data: KubernetesPublicEventDto;
}
