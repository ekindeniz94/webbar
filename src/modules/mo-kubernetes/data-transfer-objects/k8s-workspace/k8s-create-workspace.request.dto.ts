import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sWorkspaceResourceDto } from './k8s-workspace-resource.dto';

export class K8sCreateWorkspaceRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => K8sWorkspaceResourceDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  resources: K8sWorkspaceResourceDto[];
}
