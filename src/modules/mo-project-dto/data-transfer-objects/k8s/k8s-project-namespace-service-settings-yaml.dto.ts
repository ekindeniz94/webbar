import { Expose, Transform, Type } from 'class-transformer';
import { K8sEnvVarDto } from './k8s-envvar.dto';
import { isArray } from 'class-validator';
import { K8sPortsDto } from './k8s-port.dto';
import { IdDto } from '@mogenius/core-dto';
import { ContainerTypeEnum } from '../../enums';
import { K8sProjectNamespaceServiceSettingsK8sSettingsYamlDto } from './k8s-project-namespace-service-settings-k8s-settings-yaml.dto';

export class K8sProjectNamespaceServiceSettingsYamlDto {
  @Expose()
  serviceType: ContainerTypeEnum;

  @Expose()
  displayName: string;

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Expose()
  dockerfileName: string;

  @Expose()
  dockerContext: string;

  @Type(() => K8sProjectNamespaceServiceSettingsK8sSettingsYamlDto)
  @Expose()
  k8sSettings: K8sProjectNamespaceServiceSettingsK8sSettingsYamlDto;

  @Type(() => K8sEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: K8sEnvVarDto[];

  @Type(() => K8sPortsDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: K8sPortsDto[];

  @Type(() => IdDto)
  @Expose()
  app: IdDto;
}
