import { Expose } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { CurrencyEnum } from '../../enums/currency.enum';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { PaypalPlanData } from '../../utils/plan.utils';
import { ProductDto } from '../product';

export class CurrencyDto extends BaseEntityDto {
  @Expose()
  type: CurrencyEnum;

  @Expose()
  pricePerMonth: number;

  @Expose()
  pricePerYear: number;
}
