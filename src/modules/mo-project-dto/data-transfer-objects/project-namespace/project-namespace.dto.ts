import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';
import { UserPublicDto } from '@mo/user-dto';
import { isString } from 'class-validator';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';

export class ProjectNamespaceDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Expose()
  displayName: string;

  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  )
  @Expose()
  name: string; // `${project.name}-${project-namespace.name}` k8s namespace-name

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DESCRIPTION.MAX)
  )
  @Expose()
  description: string;

  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @Expose()
  projectNamespaceServiceCount: number;
}
