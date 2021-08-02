import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';

export class DocuNavMiscDataDto extends BaseEntityDto {
  @Expose()
  seoUrl: string;

  @Expose()
  tags: string[];

  @Expose()
  title: string;

  @Expose()
  subNavIds: String[];

  @Expose()
  documentIds: String[];
}
