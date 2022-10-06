import { Expose } from 'class-transformer';
import { OriginTrafficDto } from '../traffic';

export class NamespaceStageOriginTrafficDto extends OriginTrafficDto {
  @Expose()
  id: string;

  @Expose()
  subscriptionId: string;

  @Expose()
  namespaceId: string;
}
