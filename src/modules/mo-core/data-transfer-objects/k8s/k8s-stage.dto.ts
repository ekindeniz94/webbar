import { Expose } from "class-transformer";
import { K8sServiceDto } from "./k8s-service.dto";

export class K8sStageDto {
    @Expose()
    id: string;

    @Expose()
    displayname: string;

    @Expose()
    k8sName: string; // MoNamespaceUtils.kubernetesName(namespace, stage)

    @Expose()
    hostname: string; // MoNamespaceUtils.fullHostname(namespace, stage)

    @Expose()
    storageSizeInMb: number; // namespace.subscription.plan.product.persistentDiskInMb

    @Expose()
    services: K8sServiceDto[];
}