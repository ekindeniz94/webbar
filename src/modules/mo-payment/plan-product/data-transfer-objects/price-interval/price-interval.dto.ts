import { Expose, Transform, Type } from 'class-transformer';
import {isArray, isString, IsString} from 'class-validator';
import { ProductDto } from '../product/product.dto';
import { BaseEntityDto } from '../../../../mo-core';
import { SubscriptionDto } from '../../../subscription-pool';
import { ProductRuntimeIntervalEnum } from '../../enums';

export class PriceIntervalDto extends BaseEntityDto {
  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;

  @Type(() => SubscriptionDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  subscriptions: SubscriptionDto[];

  /****************************** PAYPAL ******************************/
  @Transform(({ value }) => (value && isString(value) ? value : null))
  @Expose()
  paypalPlanId: string;

  @Transform(({ value }) => value ?? {})
  @Expose()
  paypalPlanResponseData: any;
  /********************************************************************/

  @Transform(({ value }) => value ?? ProductRuntimeIntervalEnum.YEAR)
  @Expose()
  interval: ProductRuntimeIntervalEnum;

  @Transform(({ value }) => value ?? 0)
  @Expose()
  price: number;

  @Transform(({ value }) => value ?? 0)
  @Expose()
  strikethroughPrice: number;
}
