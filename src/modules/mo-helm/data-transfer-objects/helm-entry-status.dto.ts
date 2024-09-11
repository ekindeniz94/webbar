import { Expose, Type } from 'class-transformer';
import { HelmEntryDto } from './helm-entry.dto';

export class HelmEntryStatusDto {
  @Type(() => HelmEntryDto)
  @Expose()
  entry: HelmEntryDto;

  @Expose()
  status: 'success' | 'error';

  @Expose()
  errorMessage?: string;
}
