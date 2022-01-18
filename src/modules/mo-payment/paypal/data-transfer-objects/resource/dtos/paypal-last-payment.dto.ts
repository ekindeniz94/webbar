import { Expose } from "class-transformer";
import { PaypalAmountDto } from "./paypal-amount.dto";

export class PaypalLastPaymentDto {
    @Expose()
    amount: PaypalAmountDto;
  
    @Expose()
    time: string;  
  }