import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';
import { KubernetesEventDto, KubernetesEventStatusReasonEnum } from '../../../../mo-kubernetes';

export class NamespaceServicePodFlatDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  k8sName: string;

  @Expose()
  state: KubernetesEventStatusReasonEnum;

  @Type(() => KubernetesEventDto)
  @Expose()
  data: KubernetesEventDto;
}
