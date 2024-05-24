import { Expose } from 'class-transformer';

// import { OriginTrafficDto } from '../../../mo-namespace';

export class ProjectNamespaceServiceOriginTrafficDto /* extends OriginTrafficDto */{
  @Expose()
  id: string;

  @Expose()
  subscriptionId: string;

  @Expose()
  namespaceId: string;

  @Expose()
  namespaceStageId: string;
}
