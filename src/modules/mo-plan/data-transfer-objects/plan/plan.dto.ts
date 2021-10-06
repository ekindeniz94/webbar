import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { PlanStateEnum } from '../../enums';
import { CurrencyDto } from '../currency';
import { ProductDto } from '../product';

export class PlanDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @Expose()
  currencies: CurrencyDto[];

  @Expose()
  subscriptions: SubscriptionDto[];

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  startedOn: string;

  @Expose()
  state: PlanStateEnum;

  @Expose()
  order: number;
}
