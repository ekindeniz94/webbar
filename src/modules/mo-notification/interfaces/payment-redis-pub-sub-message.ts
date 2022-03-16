import { PaymentSocketDataEventEnum, PaymentSocketEventEnum } from '../enums';
import { IRedisPubSubMessage } from './redis-pub-sub-message';
import { RedisPubSubMessageDataTypes } from '../types';

/*********************************************
 * PAYMENT
 *********************************************/

/**
 * Hint: data type is PaymentSocketDataEventEnum
 */
export interface IRedisPubSubMessagePayment extends IRedisPubSubMessage {
  redisChannel: 'mo_payment';
  socketEvent: PaymentSocketEventEnum.SUBSCRIPTION_SERVICE;
  data: RedisPubSubMessageDataTypes<PaymentSocketDataEventEnum>[];
}
