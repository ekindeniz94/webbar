import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceCommandStateEnum } from '../../enums';

export class NamespaceCommandRequestDto extends BaseEntityDto {
  @Expose()
  id: string;
}
