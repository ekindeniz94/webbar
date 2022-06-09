import { Expose, Transform } from 'class-transformer';
import { SubscriptionDto } from '../../subscription/data-transfer-objects/subscription.dto';
import moment from 'moment';

export class InvoiceDto {
  @Expose()
  id: string;

  @Expose()
  uuid: string;

  @Transform(({ value }) => (value ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Expose()
  subscription: SubscriptionDto;

  @Expose()
  state: string;
}
