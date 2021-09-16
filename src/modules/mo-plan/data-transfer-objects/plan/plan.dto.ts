import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { PaypalPlanData } from '../../utils/plan.utils';
import { CurrencyDto } from '../currency/currency.dto';
import { ProductDto } from '../product';

export class PlanDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @Expose()
  currencies: CurrencyDto[];

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  startedOn: string;

  @Expose()
  state: PlanStateEnum;

  get paypalPlanData(): PaypalPlanData[] {
    return PaypalPlanData.fromPlan(this);
  }
}
