import { K8sWorkspaceResourceTypeEnum } from '../../enums/k8s-workspace/k8s-workspace-resource-type.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { Expose } from 'class-transformer';

export class K8sWorkspaceResourceDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsEnum(K8sWorkspaceResourceTypeEnum)
  @Expose()
  type: K8sWorkspaceResourceTypeEnum;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((object: K8sWorkspaceResourceDto, value) => object.type === K8sWorkspaceResourceTypeEnum.HELM)
  @Expose()
  namespace: string;
}
