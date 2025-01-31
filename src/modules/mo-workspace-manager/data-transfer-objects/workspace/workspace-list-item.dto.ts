import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import moment from 'moment';
import { ClusterPublicDto } from '../../../mo-product-dto';
import { K8sWorkspaceResourceDto, KUBERNETES_CONST } from '../../../mo-kubernetes';

export class WorkspaceListItemDto {
  @Type(() => ClusterPublicDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  cluster: ClusterPublicDto;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value, obj }) => MoProjectDtoUtils.k8sName(value, KUBERNETES_CONST.NAME.MAX))
  @Expose()
  name: string;

  @IsOptional()
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  creationTimestamp?: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => K8sWorkspaceResourceDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  resources: K8sWorkspaceResourceDto[];
}
