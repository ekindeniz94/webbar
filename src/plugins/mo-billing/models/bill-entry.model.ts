import { TaxEnum } from '../enums/tax.enum';
import { IBillEntryData } from '../interfaces';

export class BillEntryModel {
  protected _quantity: number;
  protected _pricePerQuantityInCent: number;
  protected _tax: TaxEnum;

  constructor(data: IBillEntryData) {
    this._quantity = data.quantity;
    this._pricePerQuantityInCent = data.pricePerQuantityInCent;
    this._tax = data.tax;
  }

  serialize() {
    return {
      quantity: this._quantity,
      pricePerQuantityInCent: this._pricePerQuantityInCent,
      tax: this._tax
    };
  }
}
