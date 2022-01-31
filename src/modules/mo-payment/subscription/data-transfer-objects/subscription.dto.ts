import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { UserPublicDto } from '../../../mo-user';
import { SubscriptionStatusEnum } from '../enums';
import { SubscriptionPoolDto } from './subscription-pool.dto';
import { PriceIntervalDto } from '../../product/data-transfer-objects/price-interval';

export class SubscriptionDto extends BaseEntityDto {
  @Type(() => SubscriptionPoolDto)
  @Expose()
  subscriptionPool: SubscriptionPoolDto;

  @Type(() => PriceIntervalDto)
  @Expose()
  priceInterval: PriceIntervalDto;

  @Transform(({ value }) => value ?? SubscriptionStatusEnum.PAYMENT_PENDING)
  @Expose()
  status: SubscriptionStatusEnum;

  @Expose()
  startedAt: Date;

  @Expose()
  endedAt: Date;

  // @Type(() => PaypalWebhookEventDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // paypalWebhookEvents: PaypalWebhookEventDto[];
}
