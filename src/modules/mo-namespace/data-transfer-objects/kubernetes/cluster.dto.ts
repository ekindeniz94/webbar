import { Expose } from 'class-transformer';
import { ClusterRegionEnum } from '../../enums';

export class ClusterDto {
  @Expose()
  region: ClusterRegionEnum;

  @Expose()
  name: string;

  @Expose()
  loadbalancerIp: string;
}

export const DEFAULT_KUBERNETES_CLUSTER: ClusterDto = {
  region: ClusterRegionEnum.CENTRAL_GERMANY,
  name: 'mogenius-free',
  loadbalancerIp: '20.79.116.149'
};
