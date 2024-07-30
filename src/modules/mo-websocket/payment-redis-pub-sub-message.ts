import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mogenius/websocket-dto';
import { PaymentSocketDataEventEnum, PaymentSocketEventEnum } from '../mo-notification';

export interface IRedisPubSubMessagePayment
  extends IRedisPubSubMessage<PaymentSocketEventEnum, IRedisPubSubMessageData<PaymentSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: PaymentSocketEventEnum.SUBSCRIPTION_SERVICE;
}
