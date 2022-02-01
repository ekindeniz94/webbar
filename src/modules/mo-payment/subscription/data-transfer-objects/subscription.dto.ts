import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto } from '../../../mo-core';
import { SubscriptionStatusEnum } from '../enums';
import { SubscriptionPoolDto } from './subscription-pool.dto';
import { PriceIntervalDto } from '../../product/data-transfer-objects/price-interval';
import moment from 'moment';

export class SubscriptionDto extends BaseEntityDto {
  @Type(() => SubscriptionPoolDto)
  @Expose()
  subscriptionPool: SubscriptionPoolDto;

  @Type(() => PriceIntervalDto)
  @Expose()
  priceInterval: PriceIntervalDto;

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;

  @Type(() => PriceIntervalDto)
  @Expose()
  priceIntervalSnapshot: PriceIntervalDto;

  @Transform(({ value }) => value ?? SubscriptionStatusEnum.PAYMENT_PENDING)
  @Expose()
  status: SubscriptionStatusEnum;

  @Transform(({ value }) => moment(value).toDate())
  @Expose()
  startedAt: Date;

  @Transform(({ value }) => moment(value).toDate())
  @Expose()
  endedAt: Date;

  // @Type(() => PaypalWebhookEventDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // paypalWebhookEvents: PaypalWebhookEventDto[];
}
