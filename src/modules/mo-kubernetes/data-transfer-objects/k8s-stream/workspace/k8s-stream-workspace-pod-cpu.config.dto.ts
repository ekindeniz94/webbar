import { K8sStreamBaseConfigDto } from '../k8s-stream-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { K8sStreamRequestTypeEnum } from '../../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../../enums/k8s-stream/k8s-stream-cmd.enum';

export class K8sStreamWorkspacePodCpuConfigDto extends K8sStreamBaseConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.WORKSPACE__LIVE_STREAM_POD_CPU)
  @IsEnum(K8sStreamRequestTypeEnum)
  @Expose()
  type: K8sStreamRequestTypeEnum.WORKSPACE__LIVE_STREAM_POD_CPU;

  @Transform(() => K8sStreamCmdEnum.STREAM)
  @IsEnum(K8sStreamCmdEnum)
  @Expose()
  cmd: K8sStreamCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  workspaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  nodeName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
