import { Expose } from 'class-transformer';
import { K8sGetWorkloadRequestDto } from '../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-get-workload.request.dto';

export class ClusterEventResourceDto extends K8sGetWorkloadRequestDto {
  @Expose()
  uid: string;
}
