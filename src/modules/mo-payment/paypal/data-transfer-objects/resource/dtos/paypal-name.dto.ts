import { Expose } from "class-transformer";

export class PaypalResourceSubscriberNameDto {
    @Expose()
    given_name: string;
  
    @Expose()
    surname: string;  
  }