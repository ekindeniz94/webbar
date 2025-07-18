import { Expose, Transform, Type } from 'class-transformer';
import { CiCdPipelineLogEntryDto } from './cicd-pipeline-log-entry.dto';
import { CiCdPipelineResultEnum, CiCdPipelineStatusEnum } from '../enums';
import { MoUtils } from '@mogenius/js-utils';

export class CiCdPipelineDto {
  @Transform(({ value }) => value ?? MoUtils.nanoid())
  @Expose()
  id: string;

  @Expose()
  type: string;

  @Expose()
  name: string;

  @Expose()
  startTime: string;

  @Expose()
  finishTime: string;

  @Expose()
  state: CiCdPipelineStatusEnum;

  @Expose()
  result?: CiCdPipelineResultEnum;

  @Expose()
  resultCode?: string;

  @Expose()
  workerName?: string;

  @Type(() => CiCdPipelineLogEntryDto)
  @Expose()
  log?: CiCdPipelineLogEntryDto;
}
