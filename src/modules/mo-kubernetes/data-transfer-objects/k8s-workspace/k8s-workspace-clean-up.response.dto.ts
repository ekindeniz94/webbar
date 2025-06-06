import { Expose, Type } from 'class-transformer';

export class K8sWorkspaceCleanUpResultDto {
  @Expose()
  name: string;

  @Expose()
  namespace: string;

  @Expose()
  reason: string;
}

export class K8sWorkspaceCleanUpResponseDto {
  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  replicaSets: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  pods: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  services: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  secrets: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  configMaps: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  jobs: K8sWorkspaceCleanUpResultDto;

  @Type(() => K8sWorkspaceCleanUpResultDto)
  @Expose()
  ingresses: K8sWorkspaceCleanUpResultDto;
}
