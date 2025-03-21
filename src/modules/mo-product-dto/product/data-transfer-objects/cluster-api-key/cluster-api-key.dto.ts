import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ClusterFlatDto } from '../cluster/cluster-flat.dto';
import { ApiKeyDto } from '@mogenius/user-dto';

export class ClusterApiKeyDto extends BaseEntityDto {
  @Type(() => ClusterFlatDto)
  @Expose()
  cluster: ClusterFlatDto;

  @Type(() => ApiKeyDto)
  @Expose()
  apiKey: ApiKeyDto;

  @Expose()
  workspaceName?: string;
}
