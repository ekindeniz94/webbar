import { MessageTypeEnum, SocketMessageTypeEnum } from '../enums';

export interface ISocketMessageData<T> {
  id?: string;
  createdAt?: number;
  to: string | null;
  from?: string;
  type: SocketMessageTypeEnum;
  messageType: MessageTypeEnum;
  data: T;
}
