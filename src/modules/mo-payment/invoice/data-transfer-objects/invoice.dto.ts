import { Expose } from 'class-transformer';
import { SubscriptionDto } from '../../subscription/data-transfer-objects/subscription.dto';

export class InvoiceDto {
  @Expose()
  id: string;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  subscription: SubscriptionDto;

  @Expose()
  state: string;
}
