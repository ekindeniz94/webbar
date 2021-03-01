import moment from 'moment';
import { IPurchasedProductData } from '../interfaces/purchased-product.data';
import { ProductModel } from './product.model';

export class PurchasedProductModel extends ProductModel {
  quantity: number;
  purchaseTimestamp: string;

  constructor(data: IPurchasedProductData) {
    super(data);

    this.quantity = data.quantity;
    this.purchaseTimestamp = moment().format();
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
      quantity: this.quantity
    };
  }

  get serialize(): IPurchasedProductData {
    return {
      id: this._id,
      name: this._name,
      productType: this._productType,
      description: this._description,
      createdAt: this._createdAt,
      createdBy: this.createdBy,
      startsOn: this.startsOn,
      endsOn: this._endsOn,
      minimumDurationDays: this.minimumDurationDays,
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
      purchaseTimestamp: this.purchaseTimestamp
    };
  }
}
