import { K8sStreamBaseConfigDto } from './k8s-stream-base-config.dto';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { K8sStreamRequestTypeEnum } from '../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../enums/k8s-stream/k8s-stream-cmd.enum';
import { K8sStreamClusterOperatorLogComponentTypeEnum } from '../../enums/k8s-stream/k8s-stream-cluster-operator-log-component-type.enum';

export class K8sStreamClusterOperatorLogConfigDto extends K8sStreamBaseConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.CLUSTER__OPERATOR_LOG)
  @Expose()
  type: K8sStreamRequestTypeEnum.CLUSTER__OPERATOR_LOG;

  @Transform(() => K8sStreamCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: K8sStreamCmdEnum.LOG;

  @IsNotEmpty()
  @IsEnum(K8sStreamClusterOperatorLogComponentTypeEnum)
  @Expose()
  component: K8sStreamClusterOperatorLogComponentTypeEnum;

  @IsOptional()
  @IsString()
  @Expose()
  namespace?: string;

  @IsOptional()
  @IsString()
  @Expose()
  controller?: string;

  @IsOptional()
  @IsString()
  @Expose()
  release?: string;
}
