import { Expose, Type } from 'class-transformer';
import { K8sGetWorkloadRequestDto } from '../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-get-workload.request.dto';
import { KubernetesEventTypeEnum } from '../../mo-kubernetes';

export class ResourceRedisPubSubMessageDataDto {
  @Expose()
  type: KubernetesEventTypeEnum;

  @Expose()
  firstTimestamp: string;

  @Expose()
  lastTimestamp: string;

  @Expose()
  reason: string;

  @Expose()
  message: string;

  @Type(() => K8sGetWorkloadRequestDto)
  @Expose()
  resource: K8sGetWorkloadRequestDto;
}
