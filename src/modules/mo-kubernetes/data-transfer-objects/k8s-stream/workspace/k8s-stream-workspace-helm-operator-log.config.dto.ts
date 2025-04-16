import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import {
  K8sStreamClusterOperatorLogComponentTypeEnum,
  K8sStreamCmdEnum,
  K8sStreamRequestTypeEnum
} from '../../../enums';
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';
import { K8sStreamBaseConfigDto } from '../k8s-stream-base-config.dto';

export class K8sStreamWorkspaceHelmOperatorLogConfigDto extends K8sStreamBaseConfigDto {
  @Transform(() => K8sStreamCmdEnum.LOG)
  @Expose()
  cmd: K8sStreamCmdEnum.LOG;

  @Transform(() => K8sStreamRequestTypeEnum.WORKSPACE__HELM_OPERATOR_LOG)
  @Expose()
  type: K8sStreamRequestTypeEnum.WORKSPACE__HELM_OPERATOR_LOG;

  @IsNotEmpty()
  @IsString()
  @Expose()
  workspaceName: string;

  @IsNotEmpty()
  @Transform(() => K8sStreamClusterOperatorLogComponentTypeEnum.ComponentHelm)
  @Expose()
  component: K8sStreamClusterOperatorLogComponentTypeEnum.ComponentHelm;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsOptional()
  @IsString()
  @Expose()
  release: string;
}
