import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, isString, IsString, ValidateNested } from 'class-validator';
import { IdDto } from '@mo/core-dto';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoUtils, StripTags } from '@mo/js-utils';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';
import { CittProjectNamespaceCreateRequestDto } from '../citt';

export class ProjectCreateRequestDto {
  @IsNotEmpty()
  @Type(() => IdDto)
  @Expose()
  product: IdDto;

  @IsNotEmpty()
  @Type(() => IdDto)
  @Expose()
  cluster: IdDto;

  @IsOptional()
  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsBoolean()
  @Expose()
  citt: boolean;

  @IsNotEmpty()
  @IsString()
  @Transform(
    ({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @IsOptional()
  @Type(() => CittProjectNamespaceCreateRequestDto)
  @Expose()
  projectNamespaces?: CittProjectNamespaceCreateRequestDto[];
}
