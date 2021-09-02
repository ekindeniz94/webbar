import { Expose } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { PaypalPlanData } from '../../utils/plan.utils';
import { ProductDto } from '../product';

export class PlanDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @Expose()
  name: string;

  @Expose()
  startedOn: string;

  @Expose()
  state: PlanStateEnum;

  get paypalPlanData(): any {
    return PaypalPlanData.fromProduct(this.product);
  }
}
