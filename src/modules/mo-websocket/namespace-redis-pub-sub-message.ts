import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mo/websocket-dto';
import {
  NamespaceInvitationSocketDataEventEnum,
  NamespaceSocketDataEventEnum,
  NamespaceSocketEventEnum
} from '../mo-notification';

export interface IRedisPubSubMessageNamespaceInvitation
  extends IRedisPubSubMessage<
    NamespaceSocketEventEnum,
    IRedisPubSubMessageData<NamespaceInvitationSocketDataEventEnum, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: NamespaceSocketEventEnum.NAMESPACE_INVITATION_SERVICE;
}

export interface IRedisPubSubMessageNamespace
  extends IRedisPubSubMessage<NamespaceSocketEventEnum, IRedisPubSubMessageData<NamespaceSocketDataEventEnum, any>[]> {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: NamespaceSocketEventEnum.NAMESPACE_SERVICE;
}
