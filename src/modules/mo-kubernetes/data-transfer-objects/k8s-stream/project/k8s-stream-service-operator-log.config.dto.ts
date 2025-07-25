import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';
import { K8sStreamRequestTypeEnum } from '../../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../../enums/k8s-stream/k8s-stream-cmd.enum';

/**
 * Deprecated
 */
export class K8sStreamServiceOperatorLogConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.SERVICE__OPERATOR_LOG)
  @Expose()
  type: K8sStreamRequestTypeEnum.SERVICE__OPERATOR_LOG;

  @Transform(() => K8sStreamCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: K8sStreamCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;
}
