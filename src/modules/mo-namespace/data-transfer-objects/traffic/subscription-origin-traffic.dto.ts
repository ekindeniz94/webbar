import { Expose } from 'class-transformer';
import { OriginTrafficDto } from './origin-traffic.dto';

export class SubscriptionOriginTrafficDto extends OriginTrafficDto {
  @Expose()
  id: string;
}
