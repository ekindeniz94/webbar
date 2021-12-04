import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class CiCdPipelineLogEntry {
  @Expose()
  id: number;

  @Expose()
  url: string;
}