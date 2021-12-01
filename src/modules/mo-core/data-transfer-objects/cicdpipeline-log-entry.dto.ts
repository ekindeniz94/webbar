import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class CiCdPipelineLogEntry {
  @IsOptional()
  @Expose()
  id: number;

  @IsOptional()
  @Expose()
  url: string;
}