import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';

export class DocuMiscDataDto extends BaseEntityDto {
  @Expose()
  title: string;

  @Expose()
  content: string;
}
