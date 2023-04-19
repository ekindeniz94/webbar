import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';
import { KubernetesEventStatusReasonEnum, KubernetesPublicEventDto } from '../../../mo-kubernetes';

export class ProjectNamespaceServicePodDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  k8sName: string;

  @Expose()
  state: KubernetesEventStatusReasonEnum;

  @Type(() => KubernetesPublicEventDto)
  @Expose()
  data: KubernetesPublicEventDto;
}
