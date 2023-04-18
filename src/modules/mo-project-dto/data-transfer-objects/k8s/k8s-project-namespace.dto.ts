import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean } from 'class-validator';
import { K8sProjectNamespaceServiceDto } from './k8s-project-namespace-service.dto';

export class K8sProjectNamespaceDto {
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

  @Type(() => K8sProjectNamespaceServiceDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  services: K8sProjectNamespaceServiceDto[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  cloudflareProxied: boolean;
}
