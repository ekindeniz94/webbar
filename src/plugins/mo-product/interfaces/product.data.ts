import moment from 'moment';
import { ProductTypeEnum, ProductUnitEnum } from '../enums';

export const DEFAULT_PRODUCT_DATA: IProductData = {
  id: 'AUTO_CREATED_UUID',
  name: 'REQUIRED',
  productType: ProductTypeEnum.STANDALONE,
  description: 'REQUIRED',
  createdAt: moment().format(),
  createdBy: 'REQUIRED',
  startsOn: moment().format(),
  endsOn: moment().add(100, 'years').format(),
  minimumDurationDays: 30,
  unit: ProductUnitEnum.NUMBER,
  pricePerUnit: 9999,
  dependsOnProducts: [],
  boundToUser: null,
  deleted: false,
  icon: 'logo-mogenius-logo-standard.svg',
  requestsPerDay: 1000,
  bgColor: '',
  pricePerUnitYearlyDiscount: 8888,
  bestValue: false
};

export interface IProductData {
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
}
