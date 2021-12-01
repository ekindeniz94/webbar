import { Expose } from 'class-transformer';

export class CiCdPipelineLogEntry {
  @Expose()
  id: string;

  @Expose()
  url: string;
}