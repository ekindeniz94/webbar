import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketRedisChannelEnum } from '@mogenius/websocket-dto';
import { ProductSocketEventEnum } from './enums/product-socket-event.enum';
import { ProductClusterSocketDataEventEnum } from './enums/product-cluster-socket-data-event.enum';
import { ProductOrganizationSocketDataEventEnum } from './enums/product-organization-socket-data-event.enum';

export interface IRedisPubSubMessageProductCluster
  extends IRedisPubSubMessage<
    ProductSocketEventEnum,
    IRedisPubSubMessageData<ProductClusterSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: ProductSocketEventEnum.PRODUCT_CLUSTER_SERVICE;
}

export interface IRedisPubSubMessageProductOrganization
  extends IRedisPubSubMessage<
    ProductSocketEventEnum,
    IRedisPubSubMessageData<ProductOrganizationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: ProductSocketEventEnum.PRODUCT_ORGANIZATION_SERVICE;
}
