import { Expose } from 'class-transformer';
import { DockerComposeServiceDto } from './_docker-compose-service.dto';

// deprecated, remove after next update
export class DockerComposeDto {
  @Expose()
  version: string;

  @Expose()
  services: DockerComposeServiceDto[];
}
