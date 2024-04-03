// import { Expose, Transform, Type } from 'class-transformer';
// import { isArray, isBoolean } from 'class-validator';
// import { K8sProjectNamespaceServiceDto2 } from './k8s-project-namespace-service.dto';
// import { MoUtils } from '@mo/js-utils';
//
// export class K8sProjectNamespaceDto2 {
//   @Expose()
//   id: string;
//
//   @Expose()
//   displayName: string;
//
//   // @Expose()
//   // k8sName: string; // MoNamespaceUtils.kubernetesName(namespace, stage)
//   //
//   // @Expose()
//   // hostname: string; // MoNamespaceUtils.fullHostname(namespace, stage)
//
//   @Expose()
//   name: string; // MoNamespaceUtils.kubernetesName(namespace, stage)
//
//   @Expose()
//   storageSizeInMb: number; // namespace.subscription.plan.product.persistentDiskInMb
//
//   @Type(() => K8sProjectNamespaceServiceDto2)
//   @Transform(({ value }) => (value && isArray(value) ? value : []))
//   @Expose()
//   services: K8sProjectNamespaceServiceDto2[];
//
//   // @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
//   // @Expose()
//   // cloudflareProxied: boolean;
// }
