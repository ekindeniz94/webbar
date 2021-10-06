import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { CurrencyDto, PlanDto } from '../../mo-plan';
import { UserPublicDto } from '../../mo-user';
import { SubscriptionStatusEnum } from '../enums';
import { SubscriptionPoolDto } from './subscription-pool.dto';

export class SubscriptionDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => SubscriptionPoolDto)
  @Expose()
  subscriptionPool: SubscriptionPoolDto;

  @Type(() => CurrencyDto)
  @Expose()
  currency: CurrencyDto;

  @Expose()
  plan: PlanDto;

  @Expose()
  status: SubscriptionStatusEnum;
}
