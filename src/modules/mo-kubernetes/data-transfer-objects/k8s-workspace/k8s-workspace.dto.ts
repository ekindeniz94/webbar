import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { K8sWorkspaceResourceDto } from './k8s-workspace-resource.dto';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import { KUBERNETES_CONST } from '../../mo-kubernetes-dto.const';
import moment from 'moment';

export class K8sWorkspaceDto {
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
