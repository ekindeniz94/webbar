import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sWorkspaceResourceDto } from './k8s-workspace-resource.dto';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import { KUBERNETES_CONST } from '../../mo-kubernetes-dto.const';

export class K8sCreateWorkspaceRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value, obj }) => MoProjectDtoUtils.k8sName(value, KUBERNETES_CONST.NAME.MAX))
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => K8sWorkspaceResourceDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  resources: K8sWorkspaceResourceDto[];
}
