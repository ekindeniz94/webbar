import { Expose } from 'class-transformer';
import { PaypalSubscriptionStatusEnum } from '../../enums';
import { PaypalLinkDto } from './dtos/paypal-link.dto';

export class PaypalResourceBillingSubscriptionCreatedDto {
  @Expose()
  id: string;

  @Expose()
  plan_id: string;

  @Expose()
  status: PaypalSubscriptionStatusEnum;

  @Expose()
  plan_overridden: boolean;

  @Expose()
  quantity: string;

  @Expose()
  create_time: string;

  @Expose()
  custom_id: string;

  @Expose()
  links: PaypalLinkDto[];
}
