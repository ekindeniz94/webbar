import { Expose } from "class-transformer";
import { PaypalAddressDto } from "./paypal-address.dto";

export class PaypalShippingAddressDto {
    @Expose()
    address: PaypalAddressDto;
  }