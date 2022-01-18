import { Expose } from "class-transformer";

export class PaypalLinkDto {
    @Expose()
    href: string;
  
    @Expose()
    rel: string;

    @Expose()
    method: string;  

    @Expose()
    encType: string;  
  }