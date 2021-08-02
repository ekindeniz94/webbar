import { Expose } from 'class-transformer';

export class DocuSectionMiscDataDto {
  @Expose()
  title: string;

  @Expose()
  content: string[];
}
