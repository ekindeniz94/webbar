import { K8sWorkspaceResourceTypeEnum } from '../../enums/workspace/k8s-workspace-resource-type.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import { KUBERNETES_CONST } from '../../mo-kubernetes-dto.const';

export class K8sWorkspaceResourceDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value, obj }) => MoProjectDtoUtils.k8sName(value, KUBERNETES_CONST.LABEL_NAME.MAX))
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsEnum(K8sWorkspaceResourceTypeEnum)
  @Expose()
  type: K8sWorkspaceResourceTypeEnum;
}
