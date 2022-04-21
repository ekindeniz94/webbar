import { Expose } from 'class-transformer';
import {
  PaypalPaymentModeEnum,
  PaypalPaymentProtectionEligibilityEnum,
  PaypalPaymentProtectionEligibilityTypeEnum
} from '../../enums';
import { PaypalAmountTotalDto } from './dtos/paypal-amount-total.dto';
import { PaypalLinkDto } from './dtos/paypal-link.dto';
import { PaypalTransactionFeeDto } from './dtos/paypal-transaction-fee.dto';
import { PaypalResourceDto } from './paypal-resource.dto';

export class PaypalResourcePaymentSaleCompletedDto extends PaypalResourceDto {
  // @Expose()
  // id: string;
  //
  // @Expose()
  // state: PaypalPaymentStateEnum;

  @Expose()
  amount: PaypalAmountTotalDto;

  @Expose()
  payment_mode: PaypalPaymentModeEnum;

  @Expose()
  create_time: string;

  @Expose()
  custom: string;

  @Expose()
  transaction_fee: PaypalTransactionFeeDto;

  @Expose()
  billing_agreement_id: string;

  @Expose()
  update_time: string;

  @Expose()
  protection_eligibility_type: PaypalPaymentProtectionEligibilityTypeEnum;

  @Expose()
  protection_eligibility: PaypalPaymentProtectionEligibilityEnum;

  @Expose()
  invoice_number: string;

  @Expose()
  links: PaypalLinkDto[];
}
