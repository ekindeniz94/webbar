import { Expose, Type } from 'class-transformer';
import moment from 'moment';
import { CountryDto, DTO_VALIDATION_CONST } from '../../../../mo-core';
import { ProductRuntimeIntervalEnum } from '../../enums';
import { PriceIntervalDto } from './price-interval.dto';

export class PriceDto {
  @Type(() => PriceIntervalDto)
  @Expose()
  priceInterval: PriceIntervalDto;

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;
  
  get currencyStr():string{
    return DTO_VALIDATION_CONST.DEFAULT_PAYMENT_CURRENCY
  }

  get price(): number {
    return +(this.priceInterval.price / 100).toFixed(2);
  }

  public getNetPriceToString(currencyStr?: string): string {
    return currencyStr ? `${currencyStr}${+(this.netPrice).toFixed(2)}` : `${this.currencyStr}${+(this.netPrice).toFixed(2)}`;
  }

  public getTaxToString(currencyStr?: string): string {
    return currencyStr ? `${currencyStr}${this.tax.toFixed(2)}` : `${this.currencyStr}${this.tax.toFixed(2)}`;
  }

  public getGrossPriceToString(currencyStr?: string): string {
    return currencyStr ? `${currencyStr}${+(this.grossPrice).toFixed(2)}` : `${this.currencyStr}${+(this.grossPrice).toFixed(2)}`;
  }

  public intervalPriceToString(currencyStr?: string): string {
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `1 x ${currencyStr ? `${currencyStr}${+(this.price).toFixed(2)}` : `${this.currencyStr}${+(this.price).toFixed(2)}`}`;
    }
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `12 x ${currencyStr ? `${currencyStr}${+(this.price).toFixed(2)}` : `${this.currencyStr}${+(this.price).toFixed(2)}`}`;
    }
    return '???';
  }

  public intervalDateToString(format: string = 'DD.MM.YYYY'): string {
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().format(format)} - ${moment().add(30, 'day').format(format)}`;
    }
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().format(format)} - ${moment().add(1, 'year').subtract(1, 'day').format(format)}`;
    }
    return '???';
  }

  public autoRenewAt(format: string = 'DD.MM.YYYY'): string {
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().add(31, 'day').format(format)}`;
    }
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().add(1, 'year').format(format)}`;
    }
    return '???';
  }

  public pricePerMonthToString(currencyStr?: string, monthStr?: string): string {
    return `${+(this.price).toFixed(2)} ${currencyStr ?? this.currencyStr} per ${monthStr ?? 'month'}`;
  }

  get netPrice(): number {
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.MONTH) {
      return +(this.price.toFixed(2));
    }
    if (this.priceInterval?.interval === ProductRuntimeIntervalEnum.YEAR) {
      return +(this.price * 12).toFixed(2);
    }
    return 0;
  }

  get tax(): number {
    return +((this.netPrice * this.country.taxPercent) / 100).toFixed(2);
  }

  get grossPrice(): number {
    return +(this.tax + this.netPrice).toFixed(2);
  }
}
