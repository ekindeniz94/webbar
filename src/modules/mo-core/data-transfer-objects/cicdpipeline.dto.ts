import { Expose, Type } from 'class-transformer';
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

  @Expose()
  result?: string;

  @Expose()
  resultCode?: string;
  
  @Expose()
  workerName?: string;

  @Expose()
  order?: string;

  @Type(() => CiCdPipelineLogEntry)
  @Expose()
  log?: CiCdPipelineLogEntry;
}