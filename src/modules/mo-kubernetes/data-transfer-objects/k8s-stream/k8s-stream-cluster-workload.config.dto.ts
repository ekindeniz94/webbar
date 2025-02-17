import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { K8sStreamBaseNamespaceContainerConfigDto } from './k8s-stream-base-namespace-container-config.dto';
import { K8sStreamRequestTypeEnum } from '../../enums/k8s-stream/k8s-stream-request-type.enum';

export class K8sStreamClusterWorkloadConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.CLUSTER__WORKLOAD)
  @Expose()
  type: K8sStreamRequestTypeEnum.CLUSTER__WORKLOAD;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
