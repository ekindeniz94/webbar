import {Expose} from 'class-transformer';
import {BaseEntityDto, KubernetesEventDto} from '../../../mo-core';
import {NamespaceServicePodStateEnum} from '../../enums';

export class NamespaceServicePodDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  k8sName: string;

  @Expose()
  state: NamespaceServicePodStateEnum;

  @Expose()
  data: KubernetesEventDto;
}
