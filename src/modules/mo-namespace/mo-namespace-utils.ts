import { NamespaceDto, NamespaceServiceDto, NamespaceStageDto } from './data-transfer-objects';

export class MoNamespaceUtils {
  static fullHostname(namespace: NamespaceDto, stage?: NamespaceStageDto, service?: NamespaceServiceDto): string {
    let hostname = `${namespace.hostname}-${namespace.shortId}.${namespace.subscription.plan.product.cluster.host}`;
    if (stage) {
      hostname = `${stage.subdomain}-${hostname}`;
    }
    if (stage && service) {
      hostname = `${service.hostname}-${hostname}`;
    }
    return hostname;
  }

  static fullHostnameWithProtocol(
    namespace: NamespaceDto,
    stage?: NamespaceStageDto,
    service?: NamespaceServiceDto
  ): string {
    let hostname = this.fullHostname(namespace, stage, service);
    return `https://${hostname}`;
  }

  static kubernetesName(namespace: NamespaceDto, stage: NamespaceStageDto, service?: NamespaceServiceDto): string {
    let k8sName = `${namespace.hostname}-${namespace.shortId}-${stage.subdomain}`;
    if (service) {
      k8sName = `${service.hostname}-${k8sName}`;
    }
    return k8sName;
  }
}
