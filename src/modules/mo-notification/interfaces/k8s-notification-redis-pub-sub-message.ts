// import { K8sNotificationSocketDataEventEnum, K8sNotificationSocketEventEnum } from '../enums';
// import { K8sNotificationDto } from '../data-transfer-objects';
// import { IRedisPubSubMessageDeprecated } from './redis-pub-sub-message';
// import { RedisPubSubMessageDataTypes } from '../types';
//
// /*********************************************
//  * K8S_NOTIFICATION
//  *********************************************/
//
// /**
//  * Hint: data type is K8sNotificationSocketDataEnum
//  */
// export interface IRedisPubSubMessageK8sNotification extends IRedisPubSubMessageDeprecated {
//   redisChannel: 'mo_k8s_notification';
//   socketEvent: K8sNotificationSocketEventEnum.NOTIFICATION;
//   data: RedisPubSubMessageDataTypes<K8sNotificationSocketDataEventEnum, K8sNotificationDto>[];
// }
//
