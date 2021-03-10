import { ISmsTokenData } from '../interfaces';


export class SmsAuthTokenModel {
  protected _userId: string;
  protected _pin: string;
  protected _createdAt: string;

  constructor(data: ISmsTokenData) {
    this._userId = data.userId;
    this._pin = data.pin;
    this._createdAt = data.createdAt;
  }

  public getSerialized(): ISmsTokenData {
    return {
      userId: this._userId,
      pin: this._pin,
      createdAt: this._createdAt,
    };
  }
}
