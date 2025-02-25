import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';
import { UserPublicDto } from '@mogenius/user-dto';
import { IdDto } from '@mogenius/core-dto';

export class ClusterApiKeyDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => IdDto)
  @Expose()
  cluster: IdDto;

  @Expose()
  name: string;

  // @Expose()
  // apiKey: string;

  @Expose()
  apiKeyExpiresAt: Date;
}
