import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceGroupDto extends BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
