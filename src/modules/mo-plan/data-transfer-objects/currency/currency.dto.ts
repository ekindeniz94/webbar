import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { ProductRuntimeIntervalEnum, CurrencyEnum } from '../../enums';
import { PaypalPlanData } from '../../utils/plan.utils';
import { PlanDto } from '../plan';
export class CurrencyDto extends BaseEntityDto {
  @Expose()
  @IsOptional()
  @IsString()
  paypalId: string;

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

  paypalPlanData(plan:PlanDto, paypalProductId: string): PaypalPlanData {
    return PaypalPlanData.from(plan, this, paypalProductId);
  }
}
