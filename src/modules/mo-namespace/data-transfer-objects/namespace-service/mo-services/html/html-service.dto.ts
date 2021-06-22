import { Expose } from 'class-transformer';
import { NamespaceServiceDto } from '../../namespace-service.dto';

export class NamespaceServiceHtmlDto extends NamespaceServiceDto {
  @Expose()
  documentRoot: string;
}
