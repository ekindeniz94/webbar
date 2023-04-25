import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, isString } from 'class-validator';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import { NamespaceNotificationDto } from '../../../mo-notification/data-transfer-objects/namespace-notification.dto';
import { KubernetesPublicEventDto } from '../../../mo-kubernetes/data-transfer-objects/kubernetes-public-event.dto';
import { KeyVaultSecretDto } from '../key-vault/key-vault-secret.dto';
import { AppDto } from '../../../mo-app-library-dto';
import { ProjectNamespaceDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace/project-namespace.dto';
import { ProjectNamespaceServiceCnameDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-cname/project-namespace-service-cname.dto';
import { ProjectNamespaceServiceCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service/project-namespace-service-create-request.dto';
import { ProjectNamespaceServiceEnvVarDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-envvar/project-namespace-service-env-var.dto';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-kubernetes-settings/project-namespace-service-kubernetes-settings.dto';
import { ProjectNamespaceServicePodDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-pod/project-namespace-service-pod.dto';
import { ProjectNamespaceServicePortBindingEnum } from '../../../mo-project-dto/enums/project-namespace-service-port-binding.enum';
import { ProjectNamespaceServicePortDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-port/project-namespace-service-port.dto';
import { ProjectNamespaceServiceStateEnum } from '../../../mo-project-dto/enums/project-namespace-service-state.enum';

import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.NAME.MAX)
  )
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  gitRepository: string;

  @Transform((params: TransformFnParams) => ProjectNamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @Expose()
  containerImage: string;

  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => value ?? '.')
  @Expose()
  dockerContext: string;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceCnameDto)
  @Expose()
  cNames: ProjectNamespaceServiceCnameDto[];

  // TODO rm
  @Type(() => Number)
  @Expose()
  internalPort: number;

  // TODO rm
  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePortDto)
  @Expose()
  ports: ProjectNamespaceServicePortDto[];

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesSettings: ProjectNamespaceServiceKubernetesSettingsDto;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceEnvVarDto)
  @Expose()
  envVars: ProjectNamespaceServiceEnvVarDto[];

  @Type(() => AppDto)
  @Expose()
  app: AppDto;

  @Type(() => ProjectNamespaceDto)
  @Expose()
  projectNamespace: ProjectNamespaceDto;

  @Expose()
  state: ProjectNamespaceServiceStateEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => KubernetesPublicEventDto)
  @Expose()
  messages: KubernetesPublicEventDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePodDto)
  @Expose()
  pods: ProjectNamespaceServicePodDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceNotificationDto)
  @Expose()
  notifications: NamespaceNotificationDto[];

  get tcpPort(): ProjectNamespaceServicePortDto | undefined {
    return (
      this.ports.find(
        (item: ProjectNamespaceServicePortDto) => item.portType === ProjectNamespaceServicePortBindingEnum.TCP
      ) ?? undefined
    );
  }

  get udpPort(): ProjectNamespaceServicePortDto | undefined {
    return (
      this.ports.find(
        (item: ProjectNamespaceServicePortDto) => item.portType === ProjectNamespaceServicePortBindingEnum.UDP
      ) ?? undefined
    );
  }

  get hostname(): string {
    return `${this.name.toLowerCase()}`;
  }

  get fullHostname(): string {
    return `http://${this.name}`;
  }

  get fullHostnameWithPort(): string {
    return `http://${this.name}:${this.internalPort}`;
  }
}
