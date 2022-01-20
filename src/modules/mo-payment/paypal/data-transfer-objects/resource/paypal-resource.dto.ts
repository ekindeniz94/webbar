import { Expose } from 'class-transformer';

export class PaypalResourceDto {
  @Expose()
  id: string;

  @Expose()
  plan_id: string;
}
