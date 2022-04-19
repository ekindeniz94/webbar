import {Expose} from 'class-transformer';
import {BaseEntityDto} from '../../../mo-core';

export class NamespaceServicePodDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  k8sName: string;

  @Expose()
  state: string;

  @Expose()
  data: any;
}
