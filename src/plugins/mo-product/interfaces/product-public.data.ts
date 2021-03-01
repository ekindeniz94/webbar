import { ProductTypeEnum, ProductUnitEnum } from '../enums';

export interface IProductDataPublic {
  id: string;
  name: string;
  productType: ProductTypeEnum;
  description: string;
  startsOn: string;
  endsOn: string;
  minimumDurationDays: number;
  unit: ProductUnitEnum;
  pricePerUnit: number;
  dependsOnProducts: string[];
  icon: string;
  requestsPerDay: number;
  bgColor: string;
  pricePerUnitYearlyDiscount: number;
  bestValue: boolean;
}
