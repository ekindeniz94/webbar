import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';

export class ProjectNamespaceServiceLogDto extends BaseEntityDto {
  @Expose()
  namespace: string;

  @Expose()
  podId: string;

  @Expose()
  serverTimestamp: string;

  @Expose()
  log: string;
}
