import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MessageTypeEnum, SocketMessageTypeEnum } from '../enums';
import { ISocketMessageData } from '../interfaces';

export class SocketMessageModel<T> {
  private readonly _id: string;

  private _createdAt: number;
  private _type: SocketMessageTypeEnum;
  private _to: string | null;
  private _from: string;

  private _messageType: MessageTypeEnum = MessageTypeEnum.INFO;
  private _data: T;

  constructor(data: ISocketMessageData<T>, userId: string) {
    this._id = data.id ?? uuidv4();
    this._createdAt = data.createdAt ?? Date.now();

    this._type = data.type;
    this._to = data.to;
    this._from = data.from ?? userId; // Früher: Config.authToken.user.id

    this._messageType = data.messageType ?? MessageTypeEnum.INFO;
    this._data = data.data;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  get createdFormatted(): string {
    return moment(this._createdAt).format('DD.MM.YYYY HH:mm:ss');
  }

  get type(): SocketMessageTypeEnum {
    return this._type;
  }

  get to(): string | null {
    return this._to;
  }

  get from(): string {
    return this._from;
  }

  get messageType(): MessageTypeEnum {
    return this._messageType;
  }

  get data(): T {
    return this._data;
  }

  public getSerialized(): ISocketMessageData<T> {
    return {
      id: this._id,
      createdAt: this._createdAt,
      to: this._to,
      from: this._from,
      type: this._type,
      messageType: this._messageType,
      data: this._data
    };
  }
}
