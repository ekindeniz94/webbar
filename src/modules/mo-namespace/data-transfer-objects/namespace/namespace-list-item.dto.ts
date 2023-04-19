import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { ProjectNamespaceStateEnum } from '../../../mo-project-dto';

export class NamespaceListItemDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  bgColorStyle: string;

  @Expose()
  state: ProjectNamespaceStateEnum;

  @Expose()
  productName: string;

  @Type(() => Number)
  @Expose()
  stageCount: number;

  @Type(() => Number)
  @Expose()
  serviceCount: number;
}
