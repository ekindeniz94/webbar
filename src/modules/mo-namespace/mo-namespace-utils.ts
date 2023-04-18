import moment from 'moment';
import { NamespaceDto, NamespaceServiceDto, NamespaceStageDto } from './data-transfer-objects';

export class MoNamespaceUtils {
  static fullHostname(namespace: NamespaceDto, stage?: NamespaceStageDto, service?: NamespaceServiceDto): string {
    // let hostname = `${namespace.hostname}-${namespace.shortId}.${namespace.subscription.priceInterval.product.cluster.host}`;
    let hostname = `${namespace.hostname}-${namespace.shortId}.${namespace.cluster.host}`;
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
    if (service) {
      return `${service.hostname}-${service.shortId}`; // SERVICE
    }
    return `${namespace.hostname}-${stage.subdomain}-${namespace.shortId}-${stage.shortId}`; // NAMESPACE OR STAGE Name
  }

  static internalServiceName(service: NamespaceServiceDto): string {
    return `${service.name}-${service.shortId}`;
  }

  // CALCULATE DAYS IN CURRENT BILLING PERIOD
  static billingPeriodDays(namespace: NamespaceDto): number {
    return 0; // return MoNamespaceUtils.billingPeriodDaysByCreatedAt(namespace.subscription.createdAt);
  }

  static billingPeriodDaysByCreatedAt(createdAt: string | Date): number {
    const subscriptionDate = moment(createdAt);
    var fromMoment: moment.Moment = moment();
    const toMoment = moment();
    if (subscriptionDate.date() > toMoment.date()) {
      fromMoment = toMoment.clone().subtract(1, 'month').set('date', subscriptionDate.date());
    } else {
      fromMoment = toMoment.clone().set('date', subscriptionDate.date());
    }
    const result = toMoment.diff(fromMoment, 'days');
    return result <= 0 ? 1 : result;
  }
}
