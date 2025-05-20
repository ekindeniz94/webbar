import { Expose, Type } from 'class-transformer';
import { ClusterEventTypeEnum } from '../enums';
import { K8sGetWorkloadRequestDto } from '../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-get-workload.request.dto';

export class ClusterEventDto {
  @Expose()
  clusterId: string;

  @Expose()
  eventType: ClusterEventTypeEnum;

  @Type(() => K8sGetWorkloadRequestDto)
  @Expose()
  resource: K8sGetWorkloadRequestDto;
}
