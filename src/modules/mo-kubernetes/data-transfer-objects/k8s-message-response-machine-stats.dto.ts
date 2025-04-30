import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { ClusterNodeMachineStatsDto } from '../../mo-product-dto/product/data-transfer-objects/cluster/cluster-node-machine-stats.dto';

export class K8sMessageResponseMachineStatsDto extends K8sMessageResponseBaseDto<ClusterNodeMachineStatsDto[]> {
  @Type(() => ClusterNodeMachineStatsDto)
  @Expose()
  data: ClusterNodeMachineStatsDto[];
}
