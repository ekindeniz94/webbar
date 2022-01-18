import { Expose, plainToClass, plainToInstance } from 'class-transformer';
import { PaypalTypesEnum } from '../enums';
import {
  PaypalResourceBillingSubscriptionActivatedDto,
  PaypalResourceBillingSubscriptionCreatedDto,
  PaypalResourcePaymentSaleCompletedDto
} from './resource';

export class PaypalResource {
  public static paypalResource(
    resource: any,
    eventType: PaypalTypesEnum
  ):
    | PaypalResourceBillingSubscriptionActivatedDto
    | PaypalResourceBillingSubscriptionCreatedDto
    | PaypalResourcePaymentSaleCompletedDto {
    switch (eventType) {
      case PaypalTypesEnum.BILLING_SUBSCRIPTION_ACTIVATED:
        return plainToInstance(PaypalResourceBillingSubscriptionActivatedDto, resource);

      case PaypalTypesEnum.BILLING_SUBSCRIPTION_CREATED:
        return plainToInstance(PaypalResourceBillingSubscriptionCreatedDto, resource);

      case PaypalTypesEnum.PAYMENT_SALE_COMPLETED:
        return plainToInstance(
          PaypalResourcePaymentSaleCompletedDto,
          resource
        ) as PaypalResourcePaymentSaleCompletedDto;

      default:
        throw new Error(`Unsupported eventType: '${eventType}'. XXX Please report this in slack!`);
    }
  }
}