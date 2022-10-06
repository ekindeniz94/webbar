import { Expose } from 'class-transformer';
import { OriginTrafficDto } from '../../traffic/origin-traffic.dto';

export class NamespaceServicePodOriginTrafficDto extends OriginTrafficDto {
  @Expose()
  id: string;

  @Expose()
  subscriptionId: string;

  @Expose()
  namespaceId: string;

  @Expose()
  namespaceStageId: string;

  @Expose()
  namespaceServiceId: string;
}
