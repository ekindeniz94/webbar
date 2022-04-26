import { Expose } from 'class-transformer';
import {
  NamespaceServiceCnameDto
} from '../../../mo-namespace/data-transfer-objects/namespace-service/namespace-service-cname.dto';
import { ServiceTypeEnum } from '../../../mo-service-library/enums/service-type.enum';
import { K8sEnvVarDto } from './k8s-envvar.dto';
import { K8sPortsDto } from './k8s-port.dto';
import { K8sServiceSettingsDto } from './k8s-service-settings.dto';
import { K8sServiceGroupDto } from './k8s-servicegroup.dto';

// HIER NUR SERVICES DIE EXPOSE = TRUE UND INTERNALPORT > 0
// fullHostname = MoNamespaceUtils.fullHostname(namespace, stage, service),
// k8sName = MoNamespaceUtils.kubernetesName(namespace, stage, service),
export class K8sServiceDto {
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

    @Expose()
    cNames: NamespaceServiceCnameDto[];

    @Expose()
    serviceType: ServiceTypeEnum;

    @Expose()
    gitRepository: string;

    @Expose()
    gitBranch: string;

    @Expose()
    dockerfileName: string;

    @Expose()
    serviceGroup: K8sServiceGroupDto;

    @Expose()
    k8sSettings: K8sServiceSettingsDto;

    @Expose()
    envVars: K8sEnvVarDto[];

    @Expose()
    ports: K8sPortsDto[];
}