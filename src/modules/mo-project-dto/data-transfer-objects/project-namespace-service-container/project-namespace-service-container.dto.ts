import { StripTags } from '@mo/js-utils';
import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { KeyVaultSecretDto } from '../key-vault';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';
import { ProjectNamespaceServiceEnvVarDto } from '../project-namespace-service-envvar';
import { ProjectNamespaceServiceCnameDto } from '../project-namespace-service-cname';
import { ProjectNamespaceServicePortDto } from '../project-namespace-service-port';
import { ProjectNamespaceServicePodDto } from '../project-namespace-service-pod';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceContainerDto extends BaseEntityDto {
  @Transform(({ value }) =>
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

  @Expose()
  containerImage: string;

  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @Expose()
  containerImageCommand: string;

  @MaxLength(PROJECT_CONST.SERVICE.CONTAINER_IMAGE_COMMAND_ARGS.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      PROJECT_CONST.SERVICE.CONTAINER_IMAGE_COMMAND_ARGS.MAX
    )
  )
  @Expose()
  containerImageCommandArgs: string;

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  // @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  // @Expose()
  // kubernetesRequests: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => ProjectNamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: ProjectNamespaceServiceEnvVarDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceCnameDto)
  @Expose()
  cNames: ProjectNamespaceServiceCnameDto[];

  @Type(() => ProjectNamespaceServicePortDto)
  @Transform(({ value }) => (isArray(value) ? value : undefined))
  @Expose()
  ports: ProjectNamespaceServicePortDto[];

  @Type(() => ProjectNamespaceServicePodDto)
  @Expose()
  pods: ProjectNamespaceServicePodDto[];
}
