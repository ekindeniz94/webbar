import { Expose } from 'class-transformer';
import { BaseEntityDto } from 'src/mo-core-base';

export class DocuSectionMiscDataDto extends BaseEntityDto {
  @Expose()
  title: string;

  @Expose()
  content: string[];
}
