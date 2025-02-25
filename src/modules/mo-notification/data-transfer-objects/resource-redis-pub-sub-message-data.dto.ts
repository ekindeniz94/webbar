import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { K8sGetWorkloadRequestDto } from '../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-get-workload.request.dto';

export class ResourceRedisPubSubMessageDataDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  reason: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  message: string;

  @IsNotEmpty()
  @Type(() => K8sGetWorkloadRequestDto)
  @Expose()
  resource: K8sGetWorkloadRequestDto;
}
