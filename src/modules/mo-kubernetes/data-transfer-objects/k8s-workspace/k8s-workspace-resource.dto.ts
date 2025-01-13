import { K8sWorkspaceResourceTypeEnum } from '../../enums/workspace/k8s-workspace-resource-type.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class K8sWorkspaceResourceDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsEnum(K8sWorkspaceResourceTypeEnum)
  @Expose()
  type: K8sWorkspaceResourceTypeEnum;
}
