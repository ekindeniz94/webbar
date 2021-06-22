import { Expose } from 'class-transformer';
import { NamespaceServiceDto } from '../../namespace-service.dto';

export class NamespaceServiceDockerDto extends NamespaceServiceDto {
  @Expose()
  dockerfileName: string;
}
