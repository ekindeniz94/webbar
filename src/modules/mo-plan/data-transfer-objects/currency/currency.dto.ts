import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { CurrencyEnum, ProductRuntimeIntervalEnum } from '../../enums';
import { PaypalPlanData } from '../../utils/plan.utils';
import { PlanDto } from '../plan';
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
}
