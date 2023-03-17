import { Expose, Transform, Type } from 'class-transformer';
import { K8sServiceDto } from './k8s-service.dto';
import { isArray } from 'class-validator';

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
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  services: K8sServiceDto[];

  @Expose()
  cloudflareProxied: boolean;
}
