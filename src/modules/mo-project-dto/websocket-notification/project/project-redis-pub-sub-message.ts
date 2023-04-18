import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mo/websocket-dto';
import { ProjectInvitationSocketDataEventEnum, ProjectSocketDataEventEnum, ProjectSocketEventEnum } from './enums';

export interface IRedisPubSubMessageProjectInvitation
  extends IRedisPubSubMessage<
    ProjectSocketEventEnum,
    IRedisPubSubMessageData<ProjectInvitationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProjectSocketEventEnum.PROJECT_INVITATION_SERVICE;
}

export interface IRedisPubSubMessageProject
  extends IRedisPubSubMessage<ProjectSocketEventEnum, IRedisPubSubMessageData<ProjectSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ProjectSocketEventEnum.PROJECT_NAMESPACE_SERVICE;
}
