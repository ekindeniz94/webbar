import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceStageIdDto extends BaseEntityDto {
  @Expose()
  id: string;
}
