import { IdDto } from '@mogenius/core-dto';
import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  isEmpty,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  IsUUID,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { ContainerTypeEnum } from '../../enums';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceContainerEnvvarPatchRequestDto } from '../project-namespace-service-container-envvar';
import { ProjectNamespaceServiceContainerGitSettingsPatchRequestDto } from '../project-namespace-service-container-git-settings';
import { ProjectNamespaceServiceContainerKubernetesLimitsDto } from './project-namespace-service-container-kubernetes-limits.dto';
import { ProjectNamespaceServiceContainerProbeDto } from './project-namespace-service-container-probe.dto';
import { StripTags } from '@mogenius/js-utils';

export class ProjectNamespaceServiceContainerPatchRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsEnum(ContainerTypeEnum)
  @Expose()
  type: ContainerTypeEnum;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  // @StripTags()
  // @Transform(({ value, obj }) =>
  //   value
  //     ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
  //     : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  // ) // containerImageName ohne tag xxx:yyy, type=git = controllerName // TODO
  // @Expose()
  // name: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceContainerKubernetesLimitsDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceContainerKubernetesLimitsDto;

  @IsOptional()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => ProjectNamespaceServiceContainerProbeDto)
  @Expose()
  probes: ProjectNamespaceServiceContainerProbeDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceContainerEnvvarPatchRequestDto)
  @ValidateNested()
  @Expose()
  envVars: ProjectNamespaceServiceContainerEnvvarPatchRequestDto[];

  /****** Repository type ******/
  @Type(() => ProjectNamespaceServiceContainerGitSettingsPatchRequestDto)
  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  gitSettings: ProjectNamespaceServiceContainerGitSettingsPatchRequestDto;

  /****** Container image type ******/
  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @Type(() => IdDto)
  @ValidateNested({ message: '$property must be an object' })
  @Transform(({ value }) =>
    isString(value)
      ? {
          id: value
        }
      : (value ?? null)
  )
  @Expose()
  containerImageRepoSecret: IdDto;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @Transform(({ value }) => {
    const trimmedValue = value && isString(value) ? value.trim() : value;
    return !trimmedValue || isEmpty(trimmedValue) ? undefined : value;
  })
  @IsOptional()
  @IsString()
  @IsJSON()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @Transform(({ value }) => {
    const trimmedValue = value && isString(value) ? value.trim() : value;
    return !trimmedValue || isEmpty(trimmedValue) ? undefined : value;
  })
  @IsOptional()
  @IsString()
  @IsJSON()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;
}
