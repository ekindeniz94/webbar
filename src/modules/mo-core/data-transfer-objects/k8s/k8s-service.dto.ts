import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceCnameDto } from '../../../mo-namespace/data-transfer-objects/namespace-service/namespace-service-cname/namespace-service-cname.dto';
import { K8sEnvVarDto2 } from './k8s-envvar.dto';
import { K8sPortsDto2 } from './k8s-port.dto';
import { K8sServiceSettingsDto2 } from './k8s-service-settings.dto';
import { K8sAppDto2 } from './k8s-app.dto';
import { isArray, isBoolean, IsOptional } from 'class-validator';

// HIER NUR SERVICES DIE EXPOSE = TRUE UND INTERNALPORT > 0
// fullHostname = MoNamespaceUtils.fullHostname(namespace, stage, service),
// k8sName = MoNamespaceUtils.kubernetesName(namespace, stage, service),
export class K8sServiceDto2 {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  shortId: string;

  @Expose()
  fullHostname: string; // MoNamespaceUtils.fullHostname(namespace, stage, service)

  @Expose()
  k8sName: string; // MoNamespaceUtils.kubernetesName(namespace, stage, service)

  @Type(() => NamespaceServiceCnameDto)
  @Expose()
  cNames: NamespaceServiceCnameDto[];

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageRepoSecretDecryptValue: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Expose()
  dockerfileName: string;

  @Expose()
  dockerContext: string;

  @Type(() => K8sAppDto2)
  @Expose()
  app: K8sAppDto2;

  @Expose()
  name: string;

  @Type(() => K8sServiceSettingsDto2)
  @Expose()
  k8sSettings: K8sServiceSettingsDto2;

  @Type(() => K8sEnvVarDto2)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: K8sEnvVarDto2[];

  @Type(() => K8sPortsDto2)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: K8sPortsDto2[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;
}
