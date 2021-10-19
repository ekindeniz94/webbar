import {
  IRedisPubSubMessageData,
  IRedisPubSubMessageNotificationBanner
} from '../interfaces/redis-pub-sub-message-data';

export type RedisPubSubMessageDataTypes<EVENT_DATA_TYPE, EVENT_DATA = any> =
  | IRedisPubSubMessageData<EVENT_DATA_TYPE, EVENT_DATA>
  | IRedisPubSubMessageNotificationBanner;
