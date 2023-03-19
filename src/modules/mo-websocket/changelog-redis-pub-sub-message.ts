import { IRedisPubSubMessage, IRedisPubSubMessageData, WebsocketChannelEnum } from '@mo/websocket-dto';
import { ChangelogSocketDataEventEnum, ChangelogSocketEventEnum } from '../mo-notification';
import { ChangelogDto } from '../mo-changelog';

export interface IRedisPubSubMessageChangelog
  extends IRedisPubSubMessage<
    ChangelogSocketEventEnum,
    IRedisPubSubMessageData<
      ChangelogSocketDataEventEnum,
      {
        changelog: ChangelogDto;
        studioUserSocketId?: string;
      }
    >[]
  > {
  redisChannel: WebsocketChannelEnum.MO_WEBSOCKET_PUBLISH_USER_MESSAGE;
  socketEvent: ChangelogSocketEventEnum.CHANGELOG_SERVICE;
}
