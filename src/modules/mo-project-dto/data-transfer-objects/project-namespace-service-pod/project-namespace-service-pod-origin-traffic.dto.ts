import { Expose } from 'class-transformer';
// import { OriginTrafficDto } from '../../../mo-namespace';

export class ProjectNamespaceServicePodOriginTrafficDto /* extends OriginTrafficDto */ {
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
