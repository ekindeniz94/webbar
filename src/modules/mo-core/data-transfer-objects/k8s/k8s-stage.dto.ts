import { Expose, Type } from 'class-transformer';
import { K8sServiceDto } from './k8s-service.dto';

export class K8sStageDto {
    @Expose()
    id: string;

    @Expose()
    displayName: string;

    @Expose()
    k8sName: string; // MoNamespaceUtils.kubernetesName(namespace, stage)

    @Expose()
    hostname: string; // MoNamespaceUtils.fullHostname(namespace, stage)

    @Expose()
    storageSizeInMb: number; // namespace.subscription.plan.product.persistentDiskInMb

    @Type(() => K8sServiceDto)
    @Expose()
    services: K8sServiceDto[];
}