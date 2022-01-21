import {Expose, Transform, Type} from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { CurrencyDto, PlanPublicDto } from '../../plan-product';
import { UserPublicDto } from '../../../mo-user';
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

  @Type(() => PlanPublicDto)
  @Expose()
  plan: PlanPublicDto;

  @Expose()
  status: SubscriptionStatusEnum;
}
