import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import moment from 'moment';
import { ClusterPublicDto } from '../../../mo-product-dto';
import { K8sWorkspaceResourceDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-workspace/k8s-workspace-resource.dto';
import { KUBERNETES_CONST } from '../../../mo-kubernetes/mo-kubernetes-dto.const';
import { WorkspaceUserDto } from './workspace-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class WorkspaceListItemDto {
  @ApiProperty({
    type: () => ClusterPublicDto,
    description: 'Cluster information',
    example: {
      id: 'cluster-id',
      name: 'Cluster Name',
      url: 'https://example.com',
      status: 'active'
    }
  })
  @Type(() => ClusterPublicDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  cluster: ClusterPublicDto;

  @ApiProperty({
    type: String,
    description: 'Unique identifier for the workspace',
    example: 'workspace-id'
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value, obj }) => MoProjectDtoUtils.k8sName(value, KUBERNETES_CONST.NAME.MAX))
  @Expose()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Creation timestamp of the workspace',
    example: '2023-10-01T12:00:00Z',
    required: false
  })
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

  @Type(() => WorkspaceUserDto)
  @Expose()
  users: WorkspaceUserDto[];
}
