import { Expose } from 'class-transformer';
// import { OriginTrafficDto } from '../traffic/origin-traffic.dto';

export class NamespaceOriginTrafficDto /* extends OriginTrafficDto*/ {
  @Expose()
  id: string;

  @Expose()
  subscriptionId: string;
}
