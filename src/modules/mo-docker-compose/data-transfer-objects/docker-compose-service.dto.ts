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
  environment: EnvVar[];

  @Expose()
  depends_on: string[];
}

export class EnvVar {
  @Expose()
  name: string;

  @Expose()
  value: string;
}