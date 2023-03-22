import { RedisPubSubMessageSocketEventTypes } from '../types';

export interface IRedisPubSubMessageDeprecated {
  toUserId: string;
  redisChannel: string;
  socketEvent: RedisPubSubMessageSocketEventTypes;
}
