import { Expose, Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { MoUtils } from '@mogenius/js-utils';
import { ProjectNamespaceServiceContainerKubernetesLimitsDto } from '../project-namespace-service-container';

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

  @Type(() => ProjectNamespaceServiceContainerKubernetesLimitsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceContainerKubernetesLimitsDto;

  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Type(() => ProjectNamespaceServiceContainerEnvVarDto)
  // @Expose()
  // envVars: ProjectNamespaceServiceContainerEnvVarDto[];

  @IsOptional()
  @IsString()
  @Expose()
  image: string;

  get containerImage(): string {
    return MoUtils.cleanUpUrl(
      this.image ?? `${this.containerRegistryPath}/${this.projectNamespaceName}-${this.containerName}:${this.buildId}`
    );
  }
}
