import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { ProjectStateEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';
import { UserPublicDto } from '@mo/user-dto';
import { ClusterPublicDto, ProductFlatDto } from '../../../mo-product-dto';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';
import { GitConnectionDto } from '../../../mo-git';

export class ProjectDisplayNameDto {
  @Expose()
  id: string;

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

  @Transform(({ value }) => value ?? ProjectStateEnum.INACTIVE)
  @Expose()
  state: ProjectStateEnum;

  @Expose()
  bgColorStyle: string;
}
