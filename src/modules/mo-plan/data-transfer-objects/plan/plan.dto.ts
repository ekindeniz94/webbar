import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { PlanStateEnum } from '../../enums';
import { CurrencyDto } from '../currency';
import { ProductDto } from '../product';

export class PlanDto extends BaseEntityDto {
  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;

  @Type(() => CurrencyDto)
  @Expose()
  currencies: CurrencyDto[];

  @Type(() => SubscriptionDto)
  @Expose()
  subscriptions: SubscriptionDto[];

  @Expose()
  name: string;

  @Expose()
  bulletPoints: string[];

  @Expose()
  description: string;

  @Expose()
  startedOn: string;

  @Expose()
  state: PlanStateEnum;

  @Expose()
  order: number;
}
