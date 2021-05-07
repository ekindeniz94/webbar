import { Exclude, Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class GroupDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  permissions: string[];
}
