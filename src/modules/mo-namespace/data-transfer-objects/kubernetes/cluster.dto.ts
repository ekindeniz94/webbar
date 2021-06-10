import { ClusterRegionEnum } from '../../enums';

export class ClusterDto {
  region: ClusterRegionEnum;
}

export const DEFAULT_KUBERNETES_CLUSTER: ClusterDto = {
  region: ClusterRegionEnum.CENTRAL_EUROPE
};
