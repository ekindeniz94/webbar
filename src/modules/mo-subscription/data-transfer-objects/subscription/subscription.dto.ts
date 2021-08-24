import { Expose } from 'class-transformer';
import { IsDate, IsEnum, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionOrderDurationEnum } from '../../enums';
import { SubscriptionStateEnum } from '../../enums/subscription-state.enum';
import { ProductDto } from '../product';

export class SubscriptionDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @Expose()
  @IsEnum(SubscriptionOrderDurationEnum)
  orderDuration: SubscriptionOrderDurationEnum;

  @Expose()
  @IsString()
  @IsDate()
  startedOn: string;

  @Expose()
  @IsEnum(SubscriptionStateEnum)
  state: SubscriptionStateEnum;
  
}
