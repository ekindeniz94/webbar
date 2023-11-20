import { Expose, Transform, Type } from 'class-transformer';
import { K8sServiceSettingsDto } from './k8s-service-settings.dto';
import { K8sEnvVarDto } from './k8s-envvar.dto';
import { isArray } from 'class-validator';
import { K8sPortsDto } from './k8s-port.dto';
import { IdDto } from '@mo/core-dto';
import { ServiceTypeEnum } from '../../enums';

export class K8sProjectNamespaceServiceSettingsYamlDto {
  @Expose()
  serviceType: ServiceTypeEnum;

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

  @Type(() => K8sServiceSettingsDto)
  @Expose()
  k8sSettings: K8sServiceSettingsDto;

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
