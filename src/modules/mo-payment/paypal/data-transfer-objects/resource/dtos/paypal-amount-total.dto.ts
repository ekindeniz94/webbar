import { Expose } from 'class-transformer';

export class PaypalAmountTotalDto {
  @Expose()
  total: string; // 900.00

  @Expose()
  currency: string; // EUR

  @Expose()
  details: {
    subtotal: string; // 900.00
  };
}
