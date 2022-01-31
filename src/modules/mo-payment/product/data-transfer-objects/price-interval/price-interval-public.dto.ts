import { Expose, Transform } from 'class-transformer';
import { ProductRuntimeIntervalEnum } from '../../enums';

export class PriceIntervalPublicDto {
  @Expose()
  id: string;

  // @Type(() => ProductPublicDto)
  // @Expose()
  // product: ProductPublicDto;
  //
  // @Type(() => SubscriptionDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // subscriptions: SubscriptionDto[];

  /****************************** PAYPAL ******************************/
  // @Transform(({ value }) => (value && isString(value) ? value : null))
  // @Expose()
  // paypalPlanId: string;
  //
  // @Transform(({ value }) => value ?? {})
  // @Expose()
  // paypalPlanResponseData: any;
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
