import { IRedisPubSubMessageNotification } from '../interfaces/notification-redis-pub-sub-message';
// import { IRedisPubSubMessagePayment } from '../interfaces/payment-redis-pub-sub-message';

export type RedisPubSubMessageTypes =
  // | IRedisPubSubMessage
  // | IRedisPubSubMessageK8sNotification
  // | IRedisPubSubMessageNamespace
  // | IRedisPubSubMessageNamespaceInvitation
  IRedisPubSubMessageNotification;
// | IRedisPubSubMessageUser
// | IRedisPubSubMessagePayment
// | IRedisPubSubMessageAuth;
