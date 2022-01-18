import { Expose } from 'class-transformer';

export class PaypalAmountDto {
  @Expose()
  currency_code: string; // EUR

  @Expose()
  value: string; // 0.0
}
