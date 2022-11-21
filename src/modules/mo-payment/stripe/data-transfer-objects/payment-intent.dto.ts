import { Expose, Type } from 'class-transformer';

export class PaymentIntentDto {
  @Expose()
  client_secret: string;

  constructor(client_secret: string) {
    this.client_secret = client_secret;
  }
}
