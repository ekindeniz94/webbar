import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { K8sStreamCmdEnum, K8sStreamRequestTypeEnum } from '../../../enums';
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';

export class K8sStreamWorkspaceEventLogConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamCmdEnum.LOG)
  @Expose()
  cmd: K8sStreamCmdEnum.LOG;

  @Transform(() => K8sStreamRequestTypeEnum.WORKSPACE__EVENT_LOG)
  @Expose()
  type: K8sStreamRequestTypeEnum.WORKSPACE__EVENT_LOG;

  @IsNotEmpty()
  @IsString()
  @Expose()
  workspaceName: string;
}
