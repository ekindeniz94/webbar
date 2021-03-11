import { IBillEntryData } from '../interfaces';

export class BillEntryModel {
  protected _name: string;
  protected _description: string;
  protected _quantity: number;
  protected _pricePerQuantityInCent: number;
  protected _taxPercent: number;

  constructor(data: IBillEntryData) {
    this._name = data.name;
    this._description = data.description;
    this._quantity = data.quantity;
    this._pricePerQuantityInCent = data.pricePerQuantityInCent;
    this._taxPercent = data.taxPercent;
  }

  public getSerialized(): IBillEntryData {
    return {
      name: this._name,
      description: this._description,
      quantity: this._quantity,
      pricePerQuantityInCent: this._pricePerQuantityInCent,
      taxPercent: this._taxPercent
    };
  }
}
