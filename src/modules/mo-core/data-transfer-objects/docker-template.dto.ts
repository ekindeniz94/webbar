import { Expose } from 'class-transformer';

export class DockerTemplateDto {
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
