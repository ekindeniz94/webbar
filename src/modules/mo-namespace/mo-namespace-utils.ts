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

  kubernetesName(namespace: NamespaceDto, stage: NamespaceStageDto): string {
    return `${namespace.hostname}-${namespace.shortId}-${stage.subdomain}`;
  }
}
