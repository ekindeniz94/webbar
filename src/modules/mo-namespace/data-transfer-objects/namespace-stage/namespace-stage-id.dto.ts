import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

export class NamespaceStageIdDto extends BaseEntityDto {
  @Expose()
  id: string;
}
