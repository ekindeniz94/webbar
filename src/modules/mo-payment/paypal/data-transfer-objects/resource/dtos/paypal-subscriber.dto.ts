import { Expose } from 'class-transformer';
import { PaypalBillingInfoDto } from './paypal-billing-info.dto';
import { PaypalLinkDto } from './paypal-link.dto';
import { PaypalResourceSubscriberNameDto } from './paypal-name.dto';
import { PaypalShippingAddressDto } from './paypal-shipping-address.dto';
import { PaypalAmountDto } from './paypal-amount.dto';

export class PaypalResourceSubscriberDto {
  @Expose()
  email_address: string;

  @Expose()
  payer_id: string;

  @Expose()
  name: PaypalResourceSubscriberNameDto;

  @Expose()
  shipping_address: PaypalShippingAddressDto;

  @Expose()
  shipping_amount: PaypalAmountDto;

  @Expose()
  start_time: string;

  @Expose()
  update_time: string;

  @Expose()
  billing_info: PaypalBillingInfoDto;

  links: PaypalLinkDto[];
}
