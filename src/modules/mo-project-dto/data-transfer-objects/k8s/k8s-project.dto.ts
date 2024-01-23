import { Expose } from 'class-transformer';
import { GitConnectionTypeEnum } from '../../../mo-git';

export class K8sProjectDto {
  @Expose()
  id: string;

  // @Expose()
  // shortId: string;

  @Expose()
  displayName: string;

  @Expose()
  gitAccessToken: string;

  @Expose()
  gitUserId: string;

  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  clusterId: string;

  @Expose()
  clusterDisplayName: string;

  @Expose()
  clusterMfaId: string;

  @Expose()
  containerRegistryPath: string;

  @Expose()
  containerRegistryUrl: string;

  @Expose()
  containerRegistryUser: string;

  @Expose()
  containerRegistryPat: string;
}
