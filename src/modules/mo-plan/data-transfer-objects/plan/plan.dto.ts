import { Expose } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { PaypalPlanData } from '../../utils/plan.utils';
import { ProductDto } from '../product';

export class PlanDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @IsString()
  @Expose()
  name: string;

  // PayPal ID will be equal to planId!
  @IsBoolean()
  @Expose()
  synchronizedWithPaypal: Boolean;

  @Expose()
  @IsString()
  @IsDateString()
  startedOn: string;

  @Expose()
  @IsEnum(PlanStateEnum)
  state: PlanStateEnum;

  get paypalPlanData(): any {
    return PaypalPlanData.fromProduct(this.product);
  }
}
