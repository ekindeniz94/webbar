import { Expose, Type } from 'class-transformer';
import {CountryDto, DTO_VALIDATION_CONST} from '../../../../mo-core';
import { ProductRuntimeIntervalEnum } from '../../enums';
import moment from 'moment';
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
    return currencyStr ? `${this.netPrice} ${currencyStr}` : `${this.netPrice} ${this.currencyStr}`;
  }

  public getTaxToString(currencyStr?: string): string {
    return currencyStr ? `${this.tax} ${currencyStr}` : `${this.tax} ${this.currencyStr}`;
  }

  public getGrossPriceToString(currencyStr?: string): string {
    return currencyStr ? `${this.grossPrice} ${currencyStr}` : `${this.grossPrice} ${this.currencyStr}`;
  }

  public intervalPriceToString(currencyStr?: string): string {
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `1 x ${currencyStr ? `${this.price} ${currencyStr}` : `${this.price} ${this.currencyStr}`}`;
    }
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `12 x ${currencyStr ? `${this.price} ${currencyStr}` : `${this.price} ${this.currencyStr}`}`;
    }
    return '???';
  }

  public intervalDateToString(format: string = 'DD.MM.YYYY'): string {
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().format(format)} - ${moment().add(30, 'day').format(format)}`;
    }
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().format(format)} - ${moment().add(1, 'year').subtract(1, 'day').format(format)}`;
    }
    return '???';
  }

  public autoRenewAt(format: string = 'DD.MM.YYYY'): string {
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().add(31, 'day').format(format)}`;
    }
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().add(1, 'year').format(format)}`;
    }
    return '???';
  }

  public pricePerMonthToString(currencyStr?: string, monthStr?: string): string {
    return `${this.price} ${currencyStr ?? this.currencyStr} per ${monthStr ?? 'month'}`;
  }

  get netPrice(): number {
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.MONTH) {
      return this.price;
    }
    if (this.priceInterval.interval === ProductRuntimeIntervalEnum.YEAR) {
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
