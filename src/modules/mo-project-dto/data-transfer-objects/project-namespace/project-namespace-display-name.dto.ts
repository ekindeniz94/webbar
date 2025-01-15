import { Expose, Transform } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';
import { IsOptional, isString } from 'class-validator';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';

export class ProjectNamespaceDisplayNameDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  )
  @Expose()
  name: string; // `${project.name}-${project-namespace.name}` k8s namespace-name

  @IsOptional()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DESCRIPTION.MAX)
  )
  @Expose()
  description: string;
}
