import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mogenius/websocket-dto';
import { ProductSocketEventEnum } from './enums/product-socket-event.enum';
import { ProductClusterSocketDataEventEnum } from './enums/product-cluster-socket-data-event.enum';
import { ProductOrganizationSocketDataEventEnum } from './enums/product-organization-socket-data-event.enum';

export interface IRedisPubSubMessageProductCluster
  extends IRedisPubSubMessage<
    ProductSocketEventEnum,
    IRedisPubSubMessageData<ProductClusterSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProductSocketEventEnum.PRODUCT_CLUSTER_SERVICE;
}

export interface IRedisPubSubMessageProductOrganization
  extends IRedisPubSubMessage<
    ProductSocketEventEnum,
    IRedisPubSubMessageData<ProductOrganizationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProductSocketEventEnum.PRODUCT_ORGANIZATION_SERVICE;
}
