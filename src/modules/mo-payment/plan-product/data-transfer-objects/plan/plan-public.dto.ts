import { Exclude, Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { SubscriptionDto } from '../../../subscription-pool';
import { ProductRuntimeIntervalEnum } from '../../enums';
import { CurrencyDto } from '../currency';
import { PlanDto } from './plan.dto';

export class PlanPublicDto extends PlanDto {
  @Type(() => SubscriptionDto)
  @Exclude()
  subscriptions: SubscriptionDto[];

  @Type(() => CurrencyDto)
  @Transform(({ value, obj }) => {
    const mouth = obj.currencies?.find((item: CurrencyDto) => item.interval === ProductRuntimeIntervalEnum.MONTH);
    const year = obj.currencies?.find((item: CurrencyDto) => item.interval === ProductRuntimeIntervalEnum.YEAR);
    return plainToInstance(CurrencyDto, year || mouth);
  })
  @Expose()
  currency: CurrencyDto;
}
