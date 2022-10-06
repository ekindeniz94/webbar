import { Expose } from 'class-transformer';
import { OriginTrafficDto } from '../../../mo-namespace/data-transfer-objects/traffic/origin-traffic.dto';

export class SubscriptionOriginTrafficDto extends OriginTrafficDto {
  @Expose()
  id: string;
}
