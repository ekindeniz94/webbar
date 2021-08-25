import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core/data-transfer-objects/base.entity.dto';

export class DocuNavMiscDataDto extends BaseEntityDto {
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
