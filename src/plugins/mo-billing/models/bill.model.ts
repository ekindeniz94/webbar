import deepmerge from 'deepmerge';
import { isObject } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { BillTypeEnum } from '../enums';
import { DEFAULT_BILL_DATA, IBillData } from '../interfaces';
import { BillEntryModel } from './bill-entry.model';
import { CurrencyModel } from './currency.model';

export class BillModel {
  protected _id: string;
  protected _type: BillTypeEnum;
  protected _billNo: string;
  protected _createdAt: string;
  protected _updateAt: string;
  protected _deliveredAt: string;
  protected _userId: string;
  protected _entries: BillEntryModel[];
  protected _currency: CurrencyModel;

  constructor(data: IBillData) {
    data = deepmerge(DEFAULT_BILL_DATA, data);

    if (data && isObject(data)) {
      try {
        data = JSON.parse(JSON.stringify(data));
      } catch (err) {
        console.log(err);
        data = {} as any;
      }
    }

    this._id = data.id ?? uuidv4();
    this._type = data.type;
    this._billNo = data.billNo;
    this._createdAt = data.createdAt;
    this._updateAt = data.updateAt;
    this._deliveredAt = data.deliveredAt;
    this._userId = data.userId;
    this._entries = data.entries.map((data) => new BillEntryModel(data));
    this._currency = new CurrencyModel(data.currency);
  }

  get id(): string {
    return this._id;
  }

  get type(): BillTypeEnum {
    return this._type;
  }

  get billNo(): string {
    return this._billNo;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updateAt(): string {
    return this._updateAt;
  }

  get deliveredAt(): string {
    return this._deliveredAt;
  }

  get userId(): string {
    return this._userId;
  }

  get entries(): BillEntryModel[] {
    return this._entries;
  }

  get currency(): CurrencyModel {
    return this._currency;
  }

  set type(value: BillTypeEnum) {
    this._type = value;
  }

  set billNo(value: string) {
    this._billNo = value;
  }

  set updatedAt(value: string) {
    this._updateAt = value;
  }

  set deliveredAt(value: string) {
    this._deliveredAt = value;
  }

  set userId(value: string) {
    this._userId = value;
  }

  set entries(value: BillEntryModel[]) {
    this._entries = value;
  }

  set currency(value: CurrencyModel) {
    this._currency = value;
  }

  public getSerialized(): IBillData {
    return {
      id: this._id,
      type: this._type,
      billNo: this._billNo,
      createdAt: this.createdAt,
      updateAt: this._updateAt,
      deliveredAt: this._deliveredAt,
      userId: this._userId,
      entries: this._entries.map((entry: BillEntryModel) => entry.getSerialized()),
      currency: this._currency.getSerialized()
    };
  }
}
