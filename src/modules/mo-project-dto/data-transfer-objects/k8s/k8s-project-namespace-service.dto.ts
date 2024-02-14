import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean } from 'class-validator';
import { K8sAppDto } from './k8s-app.dto';
import { K8sServiceSettingsDto } from './k8s-service-settings.dto';
import { K8sEnvVarDto } from './k8s-envvar.dto';
import { K8sPortsDto } from './k8s-port.dto';
import { ServiceTypeEnum } from '../../enums';

export class K8sProjectNamespaceServiceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  // @Expose()
  // shortId: string;
  //
  // @Expose()
  // fullHostname: string; // MoNamespaceUtils.fullHostname(namespace, stage, service)

  // @Expose()
  // k8sName: string; // MoNamespaceUtils.kubernetesName(namespace, stage, service)

  @Expose()
  cNames: string[];

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Expose()
  dockerfileName: string;

  @Expose()
  dockerContext: string;

  @Expose()
  pipelineId: number;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageRepoSecretDecryptValue: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Type(() => K8sAppDto)
  @Expose()
  app: K8sAppDto;

  @Expose()
  name: string;

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

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Expose()
  serviceType: ServiceTypeEnum;

  @Expose()
  settingsYaml: string;
}
