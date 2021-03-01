import { SocketEventEnum } from '../enums';
import { SocketMessageModel } from '../../mo-socket-io-server';

export interface ISocketMessage<T = any> {
  event: SocketEventEnum;
  data: SocketMessageModel<T>;
}
