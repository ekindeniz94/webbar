import { SubscriptionDto } from './subscription.dto';
import { NamespaceDto } from '../../../mo-namespace';
import {CurrencyDto, PlanDto, ProductDto} from '../../plan-product';
import { Expose, Type } from 'class-transformer';

export class SubscriptionListItemDto {
  @Type(() => SubscriptionDto)
  @Expose()
  subscription: SubscriptionDto;

  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => PlanDto)
  @Expose()
  plan: PlanDto;

  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;

  @Type(() => CurrencyDto)
  @Expose()
  currency?: CurrencyDto;
}
