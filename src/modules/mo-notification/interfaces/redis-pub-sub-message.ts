import { RedisPubSubMessageSocketEventTypes } from '../types';

export interface IRedisPubSubMessage {
  toUserId: string;
  redisChannel: string;
  socketEvent: RedisPubSubMessageSocketEventTypes;
}
