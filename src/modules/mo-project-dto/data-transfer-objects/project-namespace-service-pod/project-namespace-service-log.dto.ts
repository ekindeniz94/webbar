import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

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
