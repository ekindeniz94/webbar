import { Expose } from 'class-transformer';
import { PaypalAmountDto } from './paypal-amount.dto';
import { PaypalCycleExecutionsDto } from './paypal-cycle-executions.dto';
import { PaypalLastPaymentDto } from './paypal-last-payment.dto';

export class PaypalBillingInfoDto {
  @Expose()
  outstanding_balance: PaypalAmountDto;

  @Expose()
  cycle_executions: PaypalCycleExecutionsDto;

  @Expose()
  last_payment: PaypalLastPaymentDto;

  @Expose()
  next_billing_time: string;

  @Expose()
  failed_payments_count: number;
}
