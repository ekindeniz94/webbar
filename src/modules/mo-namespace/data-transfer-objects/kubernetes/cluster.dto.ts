import { ClusterRegionEnum } from '../../enums';

export class ClusterDto {
  region: ClusterRegionEnum;
  name: string;
}

export const DEFAULT_KUBERNETES_CLUSTER: ClusterDto = {
  region: ClusterRegionEnum.CENTRAL_EUROPE,
  name: 'mogenius-prod-cluster'
};
