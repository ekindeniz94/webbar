import { Expose } from 'class-transformer';

export class CiCdPipelineLogEntryDto {
  @Expose()
  id: number;

  @Expose()
  url: string;
}
