import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { CurrencyEnum, ProductRuntimeIntervalEnum } from '../../enums';
import { PaypalPlanData } from '../../utils/plan.utils';
import { PlanDto } from '../plan';
import moment from 'moment';
export class CurrencyDto extends BaseEntityDto {
  @Expose()
  paypalId: string;

  @Expose()
  plan: PlanDto;

  @Expose()
  type: CurrencyEnum;

  @Expose()
  interval: ProductRuntimeIntervalEnum;

  @Expose()
  pricePerInterval: number;

  @Expose()
  taxPercent: number;

  @Expose()
  subscriptions: SubscriptionDto[];

  get displayPricePerInterval(): string {
    if (this.type === CurrencyEnum.EUR || this.type === CurrencyEnum.GBP || this.type === CurrencyEnum.USD) {
      return `${(this.pricePerInterval / 100).toFixed(2)}`;
    }
    return `${this.type} does not support displayPricePerInterval()`;
  }

  paypalPlanData(plan: PlanDto, paypalProductId: string): PaypalPlanData {
    return PaypalPlanData.from(plan, this, paypalProductId);
  }

  public getNetPriceToString(currencyStr?: string): string {
    return currencyStr ? `${this.netPrice} ${currencyStr}` : `${this.netPrice} ${this.type}`;
  }

  public getTaxToString(currencyStr?: string): string {
    return currencyStr ? `${this.tax} ${currencyStr}` : `${this.tax} ${this.type}`;
  }

  public getGrossPriceToString(currencyStr?: string): string {
    return currencyStr ? `${this.grossPrice} ${currencyStr}` : `${this.grossPrice} ${this.type}`;
  }

  public intervalPriceToString(currencyStr?: string): string {
    if (this.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `1 x ${currencyStr ? `${this.pricePerInterval} ${currencyStr}` : `${this.pricePerInterval} ${this.type}`}`;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `12 x ${
        currencyStr ? `${this.pricePerInterval} ${currencyStr}` : `${this.pricePerInterval} ${this.type}`
      }`;
    }
    return '???';
  }

  public intervalDateToString(format: string = 'DD.MM.YYYY'): string {
    if (this.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().format(format)} - ${moment().add(30, 'day').format(format)}`;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().format(format)} - ${moment().add(1, 'year').subtract(1, 'day').format(format)}`;
    }
    return '???';
  }

  public autoRenewAt(format: string = 'DD.MM.YYYY'): string {
    if (this.interval === ProductRuntimeIntervalEnum.MONTH) {
      return `${moment().add(31, 'day').format(format)}`;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `${moment().add(1, 'year').format(format)}`;
    }
    return '???';
  }

  public pricePerMonthToString(currencyStr?: string, monthStr?: string): string {
    return `${this.pricePerInterval} ${currencyStr ?? this.type} per ${monthStr ?? 'month'}`;
  }

  get netPrice(): number {
    if (this.interval === ProductRuntimeIntervalEnum.MONTH) {
      return this.pricePerInterval;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return this.pricePerInterval * 12;
    }
    return 0;
  }

  get tax(): number {
    return (this.netPrice * this.taxPercent) / 100;
  }

  get grossPrice(): number {
    return this.tax + this.netPrice;
  }
}
