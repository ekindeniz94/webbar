import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketRedisChannelEnum } from '@mogenius/websocket-dto';
import {
  ProjectCiCdSocketDataEventEnum,
  ProjectInvitationSocketDataEventEnum,
  ProjectSocketDataEventEnum,
  ProjectSocketEventEnum
} from './enums';

export interface IRedisPubSubMessageProject
  extends IRedisPubSubMessage<ProjectSocketEventEnum, IRedisPubSubMessageData<ProjectSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: ProjectSocketEventEnum.PROJECT_SERVICE;
}

export interface IRedisPubSubMessageProjectInvitation
  extends IRedisPubSubMessage<
    ProjectSocketEventEnum,
    IRedisPubSubMessageData<ProjectInvitationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: ProjectSocketEventEnum.PROJECT_INVITATION_SERVICE;
}

export interface IRedisPubSubMessageProjectCiCd
  extends IRedisPubSubMessage<ProjectSocketEventEnum, IRedisPubSubMessageData<ProjectCiCdSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketRedisChannelEnum.MO_WEBSOCKET__REDIS_CHANNEL__PUBLISH_EVENT;
  socketEvent: ProjectSocketEventEnum.PROJECT_CICD_SERVICE;
}
