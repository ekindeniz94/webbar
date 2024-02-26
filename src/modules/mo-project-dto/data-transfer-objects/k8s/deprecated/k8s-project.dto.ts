import { Expose, Transform } from 'class-transformer';
import { GitConnectionTypeEnum } from '../../../../mo-git';

export class K8sProjectDto2 {
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

  @Transform(({ value, obj }) => {
    return obj.displayName;
  })
  @Expose()
  clusterName: string;

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
