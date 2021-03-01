import { ProductTypeEnum, ProductUnitEnum } from '../enums';

export interface IPurchasedProductData {
  id: string;
  name: string;
  productType: ProductTypeEnum;
  description: string;
  createdAt: string;
  createdBy: string;
  startsOn: string;
  endsOn: string;
  minimumDurationDays: number;
  unit: ProductUnitEnum;
  pricePerUnit: number;
  dependsOnProducts: string[];
  boundToUser: string | null;
  deleted: boolean;
  icon: string;
  requestsPerDay: number;
  bgColor: string;
  pricePerUnitYearlyDiscount: number;
  bestValue: boolean;
  quantity: number;
  purchaseTimestamp: string;
}
