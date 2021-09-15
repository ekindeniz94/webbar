import { Expose, Transform } from 'class-transformer';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { ProductRuntimeIntervalEnum, ProductTypeEnum } from '../../enums';
import { CurrencyEnum } from '../../enums/currency.enum';
import { PaypalCategoryTypeEnum } from '../../enums/paypal-category-type.enum';
import { PaypalProductTypeEnum } from '../../enums/paypal-product-type.enum';
import { CurrencyDto } from '../currency';

export class ProductDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  productType: ProductTypeEnum;

  @Expose()
  paypalProductType: PaypalProductTypeEnum;

  @Expose()
  paypalCategoryType: PaypalCategoryTypeEnum;

  @Expose()
  interval: ProductRuntimeIntervalEnum;

  // NEEDED FOR PAYPAL
  @Expose()
  imageUrl: string;

  // NEEDED FOR PAYPAL
  @Expose()
  homeUrl: string;

  @Expose()
  startsOn: Date;

  @Expose()
  endsOn: Date;

  @Expose()
  currencies: CurrencyDto[];

  @Expose()
  deleted: boolean;

  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  trafficInMb: number;

  @Expose()
  persistentDiskInMb: number;

  @Expose()
  persistentAzureFilesInMb: number;

  @Expose()
  icon: string;

  @Expose()
  bgColor: string;

  get displayPricePerMonthInEuro(): string {
    for (const currency of this.currencies) {
      if (currency.type === CurrencyEnum.EUR) {
        return `${(currency.pricePerMonth / 100).toFixed(2)}`;
      }
    }
    return '? Euro';
  }
  get displayPricePerYearInEuro(): string {
    for (const currency of this.currencies) {
      if (currency.type === CurrencyEnum.EUR) {
        return `${(currency.pricePerYear / 100).toFixed(2)}`;
      }
    }
    return '? Euro';
  }
}
