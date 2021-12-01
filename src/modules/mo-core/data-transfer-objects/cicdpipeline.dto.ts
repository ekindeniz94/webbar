import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { CiCdPipelineLogEntry } from './cicdpipeline-log-entry.dto';

export class CiCdPipelineEntry {
  @Expose()
  type: string;

  @Expose()
  name: string;

  @Expose()
  startTime: string;

  @Expose()
  finishTime: string;

  @Expose()
  state: string;

  @IsOptional()
  @Expose()
  result?: string;

  @IsOptional()
  @Expose()
  resultCode?: string;
  
  @IsOptional()
  @Expose()
  workerName?: string;

  @IsOptional()
  @Expose()
  order?: string;

  @IsOptional()
  @Type(() => CiCdPipelineLogEntry)
  @Expose()
  log?: CiCdPipelineLogEntry;
}