import { TaxEnum } from '../enums/tax.enum';
import { IBillEntryData } from '../interfaces';

export class BillEntryModel {
  protected _name: string;
  protected _description: string;
  protected _quantity: number;
  protected _pricePerQuantityInCent: number;
  protected _tax: TaxEnum;

  constructor(data: IBillEntryData) {
    this._name = data.name;
    this._description = data.description;
    this._quantity = data.quantity;
    this._pricePerQuantityInCent = data.pricePerQuantityInCent;
    this._tax = data.tax;
  }

  public getSerialized() {
    return {
      name: this._name,
      description: this._description,
      quantity: this._quantity,
      pricePerQuantityInCent: this._pricePerQuantityInCent,
      tax: this._tax
    };
  }
}
