import { Expose, Type } from 'class-transformer';
import { K8sWorkloadStatusItemDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-workload-status-item.dto';

export class K8sWorkloadStatusDto {
  @Type(() => K8sWorkloadStatusItemDto)
  @Expose()
  items: K8sWorkloadStatusItemDto[];
}
