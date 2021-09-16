import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { ProductRuntimeIntervalEnum, CurrencyEnum } from '../../enums';
export class CurrencyDto extends BaseEntityDto {
  @Expose()
  type: CurrencyEnum;

  @Expose()
  interval: ProductRuntimeIntervalEnum;

  @Expose()
  pricePerInterval: number;

  @Expose()
  taxPercent: number;

  get displayPricePerInterval(): string {
    if (this.type === CurrencyEnum.EUR || this.type === CurrencyEnum.GBP || this.type === CurrencyEnum.USD) {
      return `${(this.pricePerInterval / 100).toFixed(2)}`;
    }
    return `${this.type} does not support displayPricePerInterval()`;
  }
}
