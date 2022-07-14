import { Expose, Transform, Type } from 'class-transformer';
import { DockerComposeRestartEnum } from '../enums/docker-compose-restart.enum';

export class DockerComposeServiceDto {
  @Expose()
  name: string;

  @Expose()
  image: string;

  @Expose()
  command: string;

  @Expose()
  restart: DockerComposeRestartEnum;

  @Expose()
  volumes: string[];

  @Expose()
  ports: string[];

  @Expose()
  environment: Array<String> | Object;

  @Expose()
  depends_on: string[];
}
