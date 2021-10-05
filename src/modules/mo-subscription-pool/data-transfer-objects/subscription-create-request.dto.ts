import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class SubscriptionCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  currencyId: string;
}
