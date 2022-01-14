import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';
import { SubscriptionDto } from '../../../subscription-pool';
import { CurrencyEnum, ProductRuntimeIntervalEnum } from '../../enums';
import { PaypalPlanData } from '../../utils/plan.utils';
import { PlanDto } from '../plan';
import moment from 'moment';
export class CurrencyDto extends BaseEntityDto {
  @Expose()
  paypalId: string;

  @Type(() => PlanDto)
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

  @Type(() => SubscriptionDto)
  @Expose()
  subscriptions: SubscriptionDto[];

  get price(): number {
    return +(this.pricePerInterval / 100).toFixed(2);
  }

  get displayPricePerInterval(): string {
    if (this.type === CurrencyEnum.EUR || this.type === CurrencyEnum.GBP || this.type === CurrencyEnum.USD) {
      return `${this.price.toFixed(2)}`;
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
      return `1 x ${currencyStr ? `${this.price} ${currencyStr}` : `${this.price} ${this.type}`}`;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return `12 x ${currencyStr ? `${this.price} ${currencyStr}` : `${this.price} ${this.type}`}`;
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
    return `${this.price} ${currencyStr ?? this.type} per ${monthStr ?? 'month'}`;
  }

  get netPrice(): number {
    if (this.interval === ProductRuntimeIntervalEnum.MONTH) {
      return this.price;
    }
    if (this.interval === ProductRuntimeIntervalEnum.YEAR) {
      return +(this.price * 12).toFixed(2);
    }
    return 0;
  }

  get tax(): number {
    return +((this.netPrice * this.taxPercent) / 100).toFixed(2);
  }

  get grossPrice(): number {
    return +(this.tax + this.netPrice).toFixed(2);
  }
}
