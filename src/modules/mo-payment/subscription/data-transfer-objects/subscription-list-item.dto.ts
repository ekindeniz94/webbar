import { SubscriptionDto } from './subscription.dto';
import { NamespaceDto } from '../../../mo-namespace';
import { ProductDto } from '../../product';
import { Expose, Type } from 'class-transformer';
import { PriceIntervalDto } from '../../product/data-transfer-objects/price-interval';

export class SubscriptionListItemDto {
  @Type(() => SubscriptionDto)
  @Expose()
  subscription: SubscriptionDto;

  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;

  @Type(() => PriceIntervalDto)
  @Expose()
  priceInterval?: PriceIntervalDto;
}
