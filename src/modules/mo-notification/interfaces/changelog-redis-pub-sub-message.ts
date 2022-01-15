import { ChangelogSocketDataEventEnum, ChangelogSocketEventEnum } from '../enums';
import { IRedisPubSubMessage } from './redis-pub-sub-message';
import { RedisPubSubMessageDataTypes } from '../types';
import { ChangelogDto } from '../../mo-changelog';

/*********************************************
 * CHANGELOG
 *********************************************/

/**
 * Hint: data type is ChangelogSocketDataEnum
 */
export interface IRedisPubSubMessageChangelog extends IRedisPubSubMessage {
  redisChannel: 'mo_changelog';
  socketEvent: ChangelogSocketEventEnum.CHANGELOG_SERVICE;
  data: RedisPubSubMessageDataTypes<
    ChangelogSocketDataEventEnum,
    {
      changelog: ChangelogDto;
      studioUserSocketId?: string;
    }
  >[];
}
