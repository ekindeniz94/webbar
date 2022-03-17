import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceCnameDto extends BaseEntityDto {
  @Type(() => Number)
  @Expose()
  internalPort: number;

  @Expose()
  cName: string;
}
