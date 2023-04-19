import { Exclude, Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

export class DocuNavMiscDataDto extends BaseEntityDto {
  @Exclude()
  entityName: string;

  @Exclude()
  type: string;

  @Exclude()
  id: string;

  @Exclude()
  createdAt: string;

  @Exclude()
  uniqueKey: string;

  @Exclude()
  partitionKey: string;

  @Expose()
  seoUrl: string;

  @Expose()
  tags: string[];

  @Expose()
  title: string;

  @Type(() => DocuNavMiscDataDto)
  @Expose()
  subNavs: DocuNavMiscDataDto[];

  @Expose()
  documentIds: String[];
}
