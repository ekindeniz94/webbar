import { Expose } from 'class-transformer';
import { ProductTypeEnum, ProductUnitEnum } from '../../../mo-product';

export class UserPurchasedProductDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  productType: ProductTypeEnum;

  @Expose()
  description: string;

  @Expose()
  createdAt: string;

  @Expose()
  createdBy: string;

  @Expose()
  startsOn: string;

  @Expose()
  endsOn: string;

  @Expose()
  minimumDurationDays: number;

  @Expose()
  unit: ProductUnitEnum;

  @Expose()
  pricePerUnit: number;

  @Expose()
  dependsOnProducts: string[];

  @Expose()
  boundToUser: string | null;

  @Expose()
  deleted: boolean;

  @Expose()
  icon: string;

  @Expose()
  requestsPerDay: number;

  @Expose()
  bgColor: string;

  @Expose()
  pricePerUnitYearlyDiscount: number;

  @Expose()
  bestValue: boolean;

  @Expose()
  quantity: number;

  @Expose()
  purchaseTimestamp: string;

  @Expose()
  yearly: boolean;
}
