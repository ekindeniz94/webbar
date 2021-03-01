import { v4 as uuidv4 } from 'uuid';
import { IUserData, IUserApiKeyData, IUserOneTimeKeyData, IProfileData } from '../interfaces';
import { UserApiKeyModel } from './user-api-key.model';
import { UserOneTimeKeyModel } from './user-one-time-key.model';

export class UserModel {
  private _id: string;
  private _email: string;
  private _passwordHash: string;
  private _apiKeys: UserApiKeyModel[];
  private _oneTimeKeys: UserOneTimeKeyModel[];

  constructor(data: IUserData) {
    this._id = data.id ?? uuidv4();
    this._email = data.email;
    this._passwordHash = data.passwordHash;
    this._apiKeys = data.apiKeys ? data.apiKeys.map((item: IUserApiKeyData) => new UserApiKeyModel(item)) : [];
    this._oneTimeKeys = data.oneTimeKeys
      ? data.oneTimeKeys.map((item: IUserOneTimeKeyData) => new UserOneTimeKeyModel(item))
      : [];
  }

  public deleteApiKey(id: string): void {
    this._apiKeys = this._apiKeys.filter((item: UserApiKeyModel) => item.id !== id);
  }

  public addApiKey(name: string): UserApiKeyModel {
    const item = new UserApiKeyModel({
      name: name
    } as IUserApiKeyData);
    this._apiKeys.push(item);
    return item;
  }

  public filterExpiredApiKeys(): void {
    this._apiKeys = this._apiKeys.filter((item: UserApiKeyModel) => !item.isExpired);
  }

  public deleteOneTimeKey(key: string): void {
    this._oneTimeKeys = this._oneTimeKeys.filter((item: UserOneTimeKeyModel) => item.key !== key);
  }

  public addOneTimeKey(): UserOneTimeKeyModel {
    const item = new UserOneTimeKeyModel();
    this._oneTimeKeys.push(item);
    return item;
  }

  public filterExpiredOneTimeKeys(): void {
    this._oneTimeKeys = this._oneTimeKeys.filter((item: UserOneTimeKeyModel) => !item.isExpired);
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  set id(value: string) {
    this._id = value;
  }

  set passwordHash(value: string) {
    this._passwordHash = value;
  }

  get apiKeys(): UserApiKeyModel[] {
    return this._apiKeys;
  }

  get oneTimeKeys(): UserOneTimeKeyModel[] {
    return this._oneTimeKeys;
  }

  get serialize(): IUserData {
    return {
      id: this._id,
      email: this._email,
      passwordHash: this._passwordHash,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.serialize),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.serialize)
    };
  }

  get profileData(): IProfileData {
    return {
      id: this._id,
      email: this._email,
      apiKeys: this._apiKeys.map((item: UserApiKeyModel) => item.serialize),
      oneTimeKeys: this._oneTimeKeys.map((item: UserOneTimeKeyModel) => item.serialize)
    };
  }
}
