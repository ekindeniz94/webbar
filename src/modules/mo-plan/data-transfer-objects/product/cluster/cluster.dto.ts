import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core/data-transfer-objects/base.entity.dto';

export class ClusterDto extends BaseEntityDto  {
  @Expose()
  region: string;

  @Expose()
  name: string;

  @Expose()
  loadbalancerIp: string;

  @Expose()
  k8smanagerUrl: string;
}