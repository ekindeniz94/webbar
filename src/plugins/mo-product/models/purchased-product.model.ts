import moment from 'moment';
import { IPurchasedProductData } from '../interfaces/purchased-product.data';
import { ProductModel } from './product.model';

export class PurchasedProductModel extends ProductModel {
  protected _quantity: number;
  protected _purchaseTimestamp: string;

  protected _yearly: boolean;

  constructor(data: IPurchasedProductData) {
    super(data);

    this._quantity = data.quantity;
    this._purchaseTimestamp = moment().format();
    this._yearly = data.yearly;
  }

  stripeLineItem(): any {
    return {
      price_data: {
        currency: 'eur',
        product_data: {
          name: this.name,
          images: [this.icon]
        },
        unit_amount: this.pricePerUnit
      },
      quantity: this._quantity
    };
  }

  get quantity(): number {
    return this._quantity;
  }

  get purchaseTimestamp(): string {
    return this._purchaseTimestamp;
  }

  get yearly(): boolean {
    return this._yearly;
  }

  get serialize(): IPurchasedProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this._createdBy,
      startsOn: this._startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this._minimumDurationDays,
      unit: this._unit,
      pricePerUnit: this._pricePerUnit,
      dependsOnProducts: this._dependsOnProducts,
      boundToUser: this._boundToUser,
      deleted: this._deleted,
      icon: this._icon,
      requestsPerDay: this._requestsPerDay,
      bgColor: this._bgColor,
      pricePerUnitYearlyDiscount: this._pricePerUnitYearlyDiscount,
      bestValue: this._bestValue,
      quantity: this.quantity,
      purchaseTimestamp: this.purchaseTimestamp,
      yearly: this._yearly
    };
  }
}
