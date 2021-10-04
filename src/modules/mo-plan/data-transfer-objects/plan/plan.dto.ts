import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { ProductDto } from '../product';
import { CurrencyDto } from '../currency';
import { PlanStateEnum } from '../../enums';

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

  @Expose()
  order: number;

  @Expose()
  deletedAt?: Date;
}
