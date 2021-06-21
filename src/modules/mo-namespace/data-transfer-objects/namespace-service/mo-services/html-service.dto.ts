import { Expose } from 'class-transformer';
import { NamespaceServiceDto } from '..';

export class NamespaceServiceHtmlDto extends NamespaceServiceDto {
  @Expose()
  documentRoot: string;

  @Expose()
  branch: string;
}
