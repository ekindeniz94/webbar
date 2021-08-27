import { Expose } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionStateEnum } from '../../enums/subscription-state.enum';
import { PaypalPlanData } from '../../utils/subscription.utils';
import { ProductDto } from '../product';

export class SubscriptionDto extends BaseEntityDto {
  @Expose()
  product: ProductDto;

  @IsString()
  @Expose()
  name: string;

  // PayPal ID will be equal to SubscriptionId!
  @IsBoolean()
  @Expose()
  synchronizedWithPaypal: Boolean;

  @Expose()
  @IsString()
  @IsDateString()
  startedOn: string;

  @Expose()
  @IsEnum(SubscriptionStateEnum)
  state: SubscriptionStateEnum;

  get paypalPlanData(): any {
    return PaypalPlanData.fromProduct(this.product);
  }
}
