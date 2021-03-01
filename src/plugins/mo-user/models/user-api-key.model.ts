import bcrypt from 'bcrypt';
import { IUserApiKeyData } from '../interfaces';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export class UserApiKeyModel {
  protected _id: string;
  protected _name: string;
  protected _key: string;
  protected _created: number;
  protected _expiresAt: number;

  constructor(data?: IUserApiKeyData, BCRYPT_SALT_ROUNDS: number = 10, MO_USER_API_KEY_EXPIRES_DAY: number = 30) {
    this._id = data?.id ?? uuidv4();
    this._name = data?.name ?? uuidv4();
    this._key = data?.key ?? bcrypt.hashSync(uuidv4(), BCRYPT_SALT_ROUNDS);
    this._created = data?.created ? data.created : Date.now();
    this._expiresAt = data?.expiresAt
      ? data.expiresAt
      : moment().add(MO_USER_API_KEY_EXPIRES_DAY, 'days').unix() * 1000;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get key(): string {
    return this._key;
  }

  get created(): number {
    return this._created;
  }

  get createdNumericDate(): number {
    return Math.floor(this._created / 1000);
  }

  get expiresAt(): number {
    return this._expiresAt;
  }

  get expiresAtNumericDate(): number {
    return Math.floor(this._expiresAt / 1000);
  }

  get createdFormatted(): string {
    return moment(this._created).format('DD.MM.YYYY HH:mm:ss');
  }

  get expiresAtFormatted(): string {
    return moment(this._expiresAt).format('DD.MM.YYYY HH:mm:ss');
  }

  get isExpired(): boolean {
    return this._expiresAt < Date.now();
  }

  get serialize(): IUserApiKeyData {
    return {
      id: this._id,
      name: this._name,
      key: this._key,
      created: this._created,
      expiresAt: this._expiresAt
    };
  }
}
