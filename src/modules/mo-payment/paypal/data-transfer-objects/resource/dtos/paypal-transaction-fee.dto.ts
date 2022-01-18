import { Expose } from 'class-transformer';

export class PaypalTransactionFeeDto {
  @Expose()
  currency: string; // EUR

  @Expose()
  value: string; // 0.0
}
