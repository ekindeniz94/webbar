import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString, IsUUID, ValidateNested } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';

export class ProjectPatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Transform(
    ({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @Transform(
    ({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DESCRIPTION.MAX)
  )
  @Expose()
  description: string;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;
}
