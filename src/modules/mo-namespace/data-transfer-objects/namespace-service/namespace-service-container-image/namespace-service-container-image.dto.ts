import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceContainerImageEnvVarDto } from './namespace-service-container-image-env-var.dto';
import { NamespaceServiceContainerImagePortDto } from './namespace-service-container-image-port.dto';
import { AppDto } from '../../../../mo-app-library';
import { NamespaceServiceKubernetesSettingsDto } from '../namespace-service-kubernetes-settings/namespace-service-kubernetes-settings.dto';
import { NamespaceServiceContainerImageServiceDto } from './namespace-service-container-image-service.dto';
import { isArray } from 'class-validator';

export class NamespaceServiceContainerImageDto {
  @Expose()
  containerRegistryUrl: string;

  @Expose()
  repositoryName: string;

  @Expose()
  buildId: string;

  @Type(() => NamespaceServiceContainerImageServiceDto)
  @Expose()
  service: NamespaceServiceContainerImageServiceDto;

  @Type(() => NamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsDto;

  @Type(() => AppDto)
  @Expose()
  app: AppDto;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServiceContainerImageEnvVarDto)
  @Expose()
  envVars: NamespaceServiceContainerImageEnvVarDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServiceContainerImagePortDto)
  @Expose()
  ports: NamespaceServiceContainerImagePortDto[];

  get repositoryNameLatest(): string {
    return `${this.repositoryName}:latest`;
  }

  get repositoryPath(): string {
    return `${this.containerRegistryUrl}/${this.repositoryName}:${this.buildId}`;
  }
}
