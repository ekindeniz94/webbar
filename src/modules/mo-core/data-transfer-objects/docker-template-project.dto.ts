import { Expose } from 'class-transformer';

export class DockerTemplateProjectDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  version: string;

  @Expose()
  description: string;

  @Expose()
  folder: string;

  @Expose()
  lastUpdate: string;

  @Expose()
  needsPvc: boolean;
}
