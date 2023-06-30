import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mo/websocket-dto';
import {
  ProjectCiCdSocketDataEventEnum,
  ProjectInvitationSocketDataEventEnum,
  ProjectSocketDataEventEnum,
  ProjectSocketEventEnum
} from './enums';

export interface IRedisPubSubMessageProject
  extends IRedisPubSubMessage<ProjectSocketEventEnum, IRedisPubSubMessageData<ProjectSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProjectSocketEventEnum.PROJECT_SERVICE;
}

export interface IRedisPubSubMessageProjectInvitation
  extends IRedisPubSubMessage<
    ProjectSocketEventEnum,
    IRedisPubSubMessageData<ProjectInvitationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProjectSocketEventEnum.PROJECT_INVITATION_SERVICE;
}

export interface IRedisPubSubMessageProjectCiCd
  extends IRedisPubSubMessage<ProjectSocketEventEnum, IRedisPubSubMessageData<ProjectCiCdSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProjectSocketEventEnum.PROJECT_CICD_SERVICE;
}
