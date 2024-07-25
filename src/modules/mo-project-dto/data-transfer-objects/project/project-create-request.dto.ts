import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, isString, IsString, ValidateNested } from 'class-validator';
import { IdRequiredDto } from '@mo/core-dto';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { StripTags, TransformToBoolean } from '@mogenius/js-utils';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { CittProjectNamespaceCreateRequestDto } from '../citt';
import { ProjectKubernetesLimitsDto } from './project-kubernetes-limits.dto';

export class ProjectCreateRequestDto {
  @IsNotEmpty()
  @Type(() => IdRequiredDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  product: IdRequiredDto;

  @IsNotEmpty()
  @Type(() => IdRequiredDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cluster: IdRequiredDto;

  @IsOptional()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  citt: boolean;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DISPLAY_NAME.MAX)
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
  @Type(() => ProjectKubernetesLimitsDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProjectKubernetesLimitsDto;

  @IsOptional()
  @Type(() => CittProjectNamespaceCreateRequestDto)
  @Transform(({ value, obj }) => (obj.citt ? value : undefined))
  @Expose()
  projectNamespaces?: CittProjectNamespaceCreateRequestDto[];
}
