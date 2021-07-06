import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

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
  @IsOptional()
  exposedPort: number;
}
