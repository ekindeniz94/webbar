import { ClusterRegionEnum } from '../../enums';
import { Expose } from 'class-transformer';

export class ClusterDto {
  @Expose()
  region: ClusterRegionEnum;
  @Expose()
  name: string;
}

export const DEFAULT_KUBERNETES_CLUSTER: ClusterDto = {
  region: ClusterRegionEnum.CENTRAL_EUROPE,
  name: 'mogenius-prod-cluster'
};
