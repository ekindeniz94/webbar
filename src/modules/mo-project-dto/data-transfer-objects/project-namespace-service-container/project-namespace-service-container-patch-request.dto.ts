import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  IsUUID,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { KeyVaultSecretDto } from '../key-vault';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceContainerGitSettingsPatchRequestDto } from '../project-namespace-service-container-git-settings';
import { ProjectNamespaceServiceContainerEnvvarPatchRequestDto } from '../project-namespace-service-container-envvar';
import { ProjectNamespaceServiceContainerPortPatchRequestDto } from '../project-namespace-service-container-port';
import { ProjectNamespaceServiceCnamePatchRequestDto } from '../project-namespace-service-container-cname';
import { ContainerTypeEnum } from '../../enums';
import { ProjectNamespaceServiceContainerKubernetesSettingsDto } from './project-namespace-service-container-kubernetes-settings.dto';

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
  @Type(() => ProjectNamespaceServiceContainerKubernetesSettingsDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: ProjectNamespaceServiceContainerKubernetesSettingsDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceContainerEnvvarPatchRequestDto)
  @ValidateNested()
  @Expose()
  envVars: ProjectNamespaceServiceContainerEnvvarPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceContainerPortPatchRequestDto)
  @Expose()
  ports: ProjectNamespaceServiceContainerPortPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => {
    if (value && isArray(value)) {
      return value.filter((item: ProjectNamespaceServiceCnamePatchRequestDto) => !!item.cName);
    }
    return [];
  })
  @Type(() => ProjectNamespaceServiceCnamePatchRequestDto)
  @ValidateNested()
  @Expose()
  cNames: ProjectNamespaceServiceCnamePatchRequestDto[];

  /****** Repository type ******/
  @Type(() => ProjectNamespaceServiceContainerGitSettingsPatchRequestDto)
  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @IsNotEmpty()
  @ValidateNested()
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
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;
}
