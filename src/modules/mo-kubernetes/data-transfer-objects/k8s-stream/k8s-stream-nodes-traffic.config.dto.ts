import { K8sStreamBaseConfigDto } from './k8s-stream-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { K8sStreamRequestTypeEnum } from '../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../enums/k8s-stream/k8s-stream-cmd.enum';

export class K8sStreamNodesTrafficConfigDto extends K8sStreamBaseConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_TRAFFIC)
  @IsEnum(K8sStreamRequestTypeEnum)
  @Expose()
  type: K8sStreamRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_TRAFFIC;

  @Transform(() => K8sStreamCmdEnum.STREAM)
  @IsEnum(K8sStreamCmdEnum)
  @Expose()
  cmd: K8sStreamCmdEnum;
}
