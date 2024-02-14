import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { KeyVaultSecretDto } from '../../key-vault';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto.const';
import { isServiceContainerImageType, isServiceGitRepositoryType, ServiceTypeEnum } from '../../../enums';
import { MoProjectDtoUtils } from '../../../mo-project-dto.utils';
import { ProjectNamespaceServiceGitSettingsPatchRequestDto } from '../../project-namespace-service-git-settings';
import { ProjectNamespaceServiceKubernetesSettingsPatchRequestDto } from '../../project-namespace-service-kubernetes-settings';
import { ProjectNamespaceServiceEnvvarPatchRequestDto } from '../../project-namespace-service-envvar';
import { ProjectNamespaceServicePortPatchRequestDto } from '../../project-namespace-service-port';
import { ProjectNamespaceServiceCnamePatchRequestDto } from '../../project-namespace-service-cname';

export class ProjectNamespaceServiceContainerPatchRequestDto {
  @IsNotEmpty()
  @IsEnum(ServiceTypeEnum)
  @Expose()
  type: ServiceTypeEnum;

  @Transform(
    ({ value }) =>
      (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @StripTags()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  ) // containerImageName ohne tag xxx:yyy, type=git = controllerName // TODO
  @Expose()
  name: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: ProjectNamespaceServiceKubernetesSettingsPatchRequestDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceEnvvarPatchRequestDto)
  @ValidateNested()
  @Expose()
  envVars: ProjectNamespaceServiceEnvvarPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePortPatchRequestDto)
  @Expose()
  ports: ProjectNamespaceServicePortPatchRequestDto[];

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
  @Type(() => ProjectNamespaceServiceGitSettingsPatchRequestDto)
  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => isServiceGitRepositoryType(obj.type))
  @IsNotEmpty()
  @ValidateNested()
  @Expose()
  gitSettings: ProjectNamespaceServiceGitSettingsPatchRequestDto;

  /****** Container image type ******/
  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => isServiceContainerImageType(obj.type))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerPatchRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;
}
