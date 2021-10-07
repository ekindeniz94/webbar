import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { PlanDto } from './plan.dto';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { CurrencyDto } from '../currency';
import { ProductRuntimeIntervalEnum } from '../../enums';

export class PlanPublicDto extends PlanDto {
  @Exclude()
  subscriptions: SubscriptionDto[];

  @Type(() => CurrencyDto)
  @Transform(({ value, obj }) => {
    const mouth = obj.currencies?.find((item: CurrencyDto) => item.interval === ProductRuntimeIntervalEnum.MONTH);

    const year = obj.currencies?.find((item: CurrencyDto) => item.interval === ProductRuntimeIntervalEnum.YEAR);
    return year || mouth;
  })
  @Expose()
  currency: CurrencyDto;
}
