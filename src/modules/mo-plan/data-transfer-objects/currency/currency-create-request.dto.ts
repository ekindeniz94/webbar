import { Expose } from 'class-transformer';
import { IsEnum, IsInt, IsNumber, Max, Min } from 'class-validator';
import { isNumber } from 'lodash';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { CurrencyEnum, ProductRuntimeIntervalEnum } from '../../enums';
import { PaypalPlanData } from '../../utils/plan.utils';
import { PlanDto } from '../plan';
export class CurrencyCreateRequestDto {
  @Expose()
  @IsEnum(CurrencyEnum)
  type: CurrencyEnum;

  @Expose()
  @IsEnum(ProductRuntimeIntervalEnum)
  interval: ProductRuntimeIntervalEnum;

  @Expose()
  @IsInt()
  pricePerInterval: number;

  @Expose()
  @IsInt()
  @Min(0)
  @Max(100)
  taxPercent: number;
}
