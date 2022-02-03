import { Expose, Type } from 'class-transformer';
import { PaypalSubscriptionStatusEnum } from '../../enums';
import { PaypalAmountDto } from './dtos/paypal-amount.dto';
import { PaypalBillingInfoDto } from './dtos/paypal-billing-info.dto';
import { PaypalLinkDto } from './dtos/paypal-link.dto';
import { PaypalResourceDto } from './paypal-resource.dto';
import { PaypalResourceSubscriberDto } from './dtos';

export class PaypalResourceBillingSubscriptionActivatedDto extends PaypalResourceDto {
  // @Expose()
  // id: string;
  //
  // @Expose()
  // plan_id: string;

  @Expose()
  status: PaypalSubscriptionStatusEnum;

  @Expose()
  status_update_time: string;

  @Expose()
  quantity: string;

  @Type(() => PaypalResourceSubscriberDto)
  @Expose()
  subscriber: PaypalResourceSubscriberDto;

  @Expose()
  create_time: string;

  @Expose()
  custom_id: string;

  @Expose()
  plan_overridden: boolean;

  @Expose()
  shipping_amount: PaypalAmountDto;

  @Expose()
  start_time: string;

  @Expose()
  update_time: string;

  @Expose()
  billing_info: PaypalBillingInfoDto;

  @Expose()
  links: PaypalLinkDto[];
}
