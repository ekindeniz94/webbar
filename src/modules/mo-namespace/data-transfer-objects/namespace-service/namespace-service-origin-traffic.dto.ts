import { Expose } from 'class-transformer';
import { OriginTrafficDto } from '../traffic';

export class NamespaceServiceOriginTrafficDto extends OriginTrafficDto {
  @Expose()
  id: string;

  @Expose()
  subscriptionId: string;

  @Expose()
  namespaceId: string;

  @Expose()
  namespaceStageId: string;
}
