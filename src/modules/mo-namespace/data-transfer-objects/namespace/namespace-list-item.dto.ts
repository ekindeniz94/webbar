import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceStateEnum } from '../../enums';

export class NamespaceListItemDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  bgColorStyle: string;

  @Expose()
  state: NamespaceStateEnum;

  @Expose()
  planName: string;

  @Expose()
  productName: string;

  @Type(() => Number)
  @Expose()
  stageCount: number;

  @Type(() => Number)
  @Expose()
  serviceCount: number;
}
