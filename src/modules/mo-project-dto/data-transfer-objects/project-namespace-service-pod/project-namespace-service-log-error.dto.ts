import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceLogErrorDto extends BaseEntityDto {
  @Expose()
  namespace: string;

  @Expose()
  podId: string;

  @Expose()
  restarts: number;

  @Expose()
  log: string;
}
