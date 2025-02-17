import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { K8sStreamCmdEnum, K8sStreamRequestTypeEnum } from "../../../enums";
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';

export class K8sStreamWorkspaceContainerShellConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamCmdEnum.EXEC_SH)
  @Expose()
  cmd: K8sStreamCmdEnum.EXEC_SH;

  @Transform(() => K8sStreamRequestTypeEnum.WORKSPACE__CONTAINER_EXEC_SH)
  @Expose()
  type: K8sStreamRequestTypeEnum.WORKSPACE__CONTAINER_EXEC_SH;

  @IsNotEmpty()
  @IsString()
  @Expose()
  workspaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
