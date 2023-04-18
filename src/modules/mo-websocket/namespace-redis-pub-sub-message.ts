import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mo/websocket-dto';
import {
  NamespaceInvitationSocketDataEventEnum2,
  NamespaceSocketDataEventEnum2,
  NamespaceSocketEventEnum2
} from '../mo-notification';

export interface IRedisPubSubMessageNamespaceInvitation2
  extends IRedisPubSubMessage<
    NamespaceSocketEventEnum2,
    IRedisPubSubMessageData<NamespaceInvitationSocketDataEventEnum2, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: NamespaceSocketEventEnum2.NAMESPACE_INVITATION_SERVICE;
}

export interface IRedisPubSubMessageNamespace2
  extends IRedisPubSubMessage<
    NamespaceSocketEventEnum2,
    IRedisPubSubMessageData<NamespaceSocketDataEventEnum2, any>[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: NamespaceSocketEventEnum2.NAMESPACE_SERVICE;
}
