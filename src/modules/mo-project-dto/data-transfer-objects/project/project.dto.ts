import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { BaseEntityDto } from '@mo/database-dto';
import { UserPublicDto } from '@mo/user-dto';
import { ClusterPublicDto, ProductFlatDto } from '../../../mo-product-dto';
import { GitConnectionDto } from '../../../mo-git';
import { MoUtils } from '@mo/js-utils';
import { ProjectKubernetesLimitsDto } from './project-kubernetes-limits.dto';

export class ProjectDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => ProductFlatDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  product: ProductFlatDto;

  @Type(() => ClusterPublicDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  cluster: ClusterPublicDto;

  @Type(() => GitConnectionDto)
  @Transform(({ value }) => (value?.id ? value : undefined))
  @Expose()
  gitConnection: GitConnectionDto;

  @Type(() => Number)
  @Expose()
  projectNamespaceCount: number;

  @Type(() => Number)
  @Expose()
  projectNamespaceServicesCount: number;

  @Type(() => Number)
  @Expose()
  projectUserCount: number;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  citt: boolean;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.NAME.MAX)
  )
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  bgColorStyle: string;

  @Type(() => ProjectKubernetesLimitsDto)
  @Expose()
  kubernetesLimits: ProjectKubernetesLimitsDto;
}
