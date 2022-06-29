import { Expose, Transform, Type } from 'class-transformer';
import { DockerComposeServiceDto } from './docker-compose-service.dto';

export class DockerComposeDto {
  @Expose()
  version: string;

  @Expose()
  services: DockerComposeServiceDto[];
}
