import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';
import { K8sStreamRequestTypeEnum } from '../../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../../enums/k8s-stream/k8s-stream-cmd.enum';

/**
 * Deprecated
 */
export class K8sStreamServicePodExecShConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.SERVICE__POD_EXEC_SH)
  @Expose()
  type: K8sStreamRequestTypeEnum.SERVICE__POD_EXEC_SH;

  @Transform(() => K8sStreamCmdEnum.EXEC_SH)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: K8sStreamCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
