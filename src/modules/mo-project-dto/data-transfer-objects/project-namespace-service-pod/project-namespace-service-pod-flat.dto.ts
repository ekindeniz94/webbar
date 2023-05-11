import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';
import { KubernetesEventDto, KubernetesEventStatusReasonEnum } from '../../../mo-kubernetes';

export class ProjectNamespaceServicePodFlatDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  state: KubernetesEventStatusReasonEnum;

  @Type(() => KubernetesEventDto)
  @Expose()
  data: KubernetesEventDto;
}
