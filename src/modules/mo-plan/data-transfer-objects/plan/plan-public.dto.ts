import { Exclude, Expose } from 'class-transformer';
import { CurrencyDto } from '../currency';
import { PlanDto } from './plan.dto';

export class PlanPublicDto extends PlanDto {
  @Exclude()
  currencies: CurrencyDto[];

  @Expose()
  currency: CurrencyDto;
}
