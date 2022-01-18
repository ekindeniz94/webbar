import { Expose } from 'class-transformer';

export class PaypalCycleExecutionsDto {
  @Expose()
  tenure_type: string;

  @Expose()
  sequence: number;

  @Expose()
  cycles_completed: number;

  @Expose()
  cycles_remaining: number;

  @Expose()
  current_pricing_scheme_version: number;

  @Expose()
  total_cycles: Number;
}
