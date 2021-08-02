import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';

export class DocuSectionMiscDataDto extends BaseEntityDto {
  @Expose()
  title: string;

  @Expose()
  content: string[];
}
