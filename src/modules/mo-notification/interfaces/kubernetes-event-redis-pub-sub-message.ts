import { KubernetesEventSocketDataEventEnum, KubernetesEventSocketEventEnum } from '../enums';
import { IRedisPubSubMessage } from './redis-pub-sub-message';
import { RedisPubSubMessageDataTypes } from '../types';
import { KubernetesEventDto } from '../../mo-core';

/*********************************************
 * KUBERNETES_EVENT
 *********************************************/

/**
 * Hint: data type is KubernetesEventSocketDataEnum
 */
export interface IRedisPubSubMessageKubernetesEvent extends IRedisPubSubMessage {
  redisChannel: 'mo_kubernetes_event';
  socketEvent: KubernetesEventSocketEventEnum.EVENT;
  data: RedisPubSubMessageDataTypes<KubernetesEventSocketDataEventEnum, KubernetesEventDto>[];
}
