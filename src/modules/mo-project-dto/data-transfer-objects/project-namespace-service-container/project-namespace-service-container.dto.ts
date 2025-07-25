import { MoUtils, StripTags } from '@mogenius/js-utils';
import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString, MaxLength } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { KeyVaultSecretDto } from '../key-vault';
import { ProjectNamespaceServiceContainerEnvVarDto } from '../project-namespace-service-container-envvar';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ProjectNamespaceServiceContainerGitSettingsDto } from '../project-namespace-service-container-git-settings';
import { CpuDto, EphemeralStorageDto, MemoryDto } from '../stats';
import { KubernetesPublicEventDto } from '../../../mo-kubernetes';
import { ContainerTypeEnum } from '../../enums';
import { ProjectNamespaceServiceContainerKubernetesLimitsDto } from './project-namespace-service-container-kubernetes-limits.dto';
import { AppContainerDto } from '../../../mo-app-library-dto/data-transfer-objects/app-container/app-container.dto';
import { ProjectNamespaceServiceContainerProbeDto } from './project-namespace-service-container-probe.dto';

export class ProjectNamespaceServiceContainerDto extends BaseEntityDto {
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @Expose()
  type: ContainerTypeEnum;

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
  @Transform(({ value }) => (value && value.id ? value : null))
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

  @Type(() => ProjectNamespaceServiceContainerGitSettingsDto)
  @Expose()
  gitSettings: ProjectNamespaceServiceContainerGitSettingsDto;

  @Type(() => ProjectNamespaceServiceContainerKubernetesLimitsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceContainerKubernetesLimitsDto;

  // @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  // @Expose()
  // kubernetesRequests: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => ProjectNamespaceServiceContainerEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: ProjectNamespaceServiceContainerEnvVarDto[];

  @Type(() => CpuDto)
  @Expose()
  cpu: CpuDto;

  @Type(() => MemoryDto)
  @Expose()
  memory: MemoryDto;

  @Type(() => EphemeralStorageDto)
  @Expose()
  ephemeralStorage: EphemeralStorageDto;

  @Transform(({ value }) =>
    MoUtils.transformToDto(
      ProjectNamespaceServiceContainerProbeDto,
      value,
      ProjectNamespaceServiceContainerProbeDto.initEmptyContainerProbe()
    )
  )
  @Expose()
  probes: ProjectNamespaceServiceContainerProbeDto;

  // deployment message
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => KubernetesPublicEventDto)
  @Expose()
  messages: KubernetesPublicEventDto[];

  @Type(() => AppContainerDto)
  @Expose()
  appContainer: AppContainerDto;
}
