import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class PaymentIntentDto {
  @Expose()
  @IsString()
  client_secret: string;
}
