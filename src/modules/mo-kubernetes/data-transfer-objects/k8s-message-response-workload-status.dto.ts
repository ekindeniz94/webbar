import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { K8sWorkloadStatusDto } from './k8s-workload/k8s-workload-status.dto';

export class K8sMessageResponseWorkloadStatusDto extends K8sMessageResponseBaseDto<K8sWorkloadStatusDto[]> {
  @Type(() => K8sWorkloadStatusDto)
  @Expose()
  data: K8sWorkloadStatusDto[];
}
