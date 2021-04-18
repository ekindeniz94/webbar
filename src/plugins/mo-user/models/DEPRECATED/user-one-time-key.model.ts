import moment from 'moment';
import { IUserOneTimeKeyData } from '../../interfaces/DEPRECATED';

export class UserOneTimeKeyModel {
  protected _key: string;
  protected _created: number;
  protected _expiresAt: number;

  constructor(data: IUserOneTimeKeyData) {
    this._key = data?.key; // ?? bcrypt.hashSync(uuidv4(), BCRYPT_SALT_ROUNDS);
    this._created = data?.created; //  ? data.created : Date.now();
    this._expiresAt = data?.expiresAt; //  ? data.expiresAt : Date.now() + MO_USER_OTK_EXPIRES_MS;
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

  public getSerialized(): IUserOneTimeKeyData {
    return {
      key: this._key,
      created: this._created,
      expiresAt: this._expiresAt
    };
  }
}
