import { Expose, Transform, Type } from 'class-transformer';
import { UserPublicDto } from '../../mo-user';
import { CurrencyDto } from '../../mo-plan';
import { BaseEntityDto } from '../../mo-core';
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
  status: SubscriptionStatusEnum;
}
