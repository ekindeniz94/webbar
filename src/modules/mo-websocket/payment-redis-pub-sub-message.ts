import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketRedisChannelEnum } from '@mogenius/websocket-dto';
import { PaymentSocketDataEventEnum, PaymentSocketEventEnum } from '../mo-notification';

export interface IRedisPubSubMessagePayment
  extends IRedisPubSubMessage<PaymentSocketEventEnum, IRedisPubSubMessageData<PaymentSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: PaymentSocketEventEnum.SUBSCRIPTION_SERVICE;
}
