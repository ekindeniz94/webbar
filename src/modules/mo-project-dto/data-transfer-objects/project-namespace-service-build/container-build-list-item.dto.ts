import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';
import { isArray } from 'class-validator';
import { ProjectNamespaceServiceEnvVarDto } from '../project-namespace-service-envvar';
import { ProjectNamespaceServicePortDto } from '../project-namespace-service-port';
import { MoUtils } from '@mo/js-utils';

export class ContainerBuildListItemDto {
  @Expose()
  projectId: string;

  @Expose()
  projectDisplayName: string;

  @Expose()
  projectName: string;

  @Expose()
  projectNamespaceId: string;

  @Expose()
  projectNamespaceDisplayName: string;

  @Expose()
  projectNamespaceName: string;

  @Expose()
  serviceId: string;

  @Expose()
  serviceDisplayName: string;

  @Expose()
  containerRegistryPath: string;

  @Expose()
  containerName: string;

  @Expose()
  buildId: string;

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceEnvVarDto)
  @Expose()
  envVars: ProjectNamespaceServiceEnvVarDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePortDto)
  @Expose()
  ports: ProjectNamespaceServicePortDto[];

  get containerImage(): string {
    return MoUtils.cleanUpUrl(
      `${this.containerRegistryPath}/${this.projectNamespaceName}-${this.containerName}:${this.buildId}`
    );
  }
}
