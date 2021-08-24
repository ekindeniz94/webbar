import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../subscription/subscription.dto';

export class SubscriptionPoolDto extends BaseEntityDto {
  @Expose()
  subscriptions: SubscriptionDto[];
}
