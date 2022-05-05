import { Expose } from 'class-transformer';
import { SpectrumEventsEnum } from '../enums';

export class CloudflareLogSpectrumDto {
  @Expose()
  application: string;

  @Expose()
  status: number;

  @Expose()
  event: SpectrumEventsEnum;

  @Expose()
  clientBytes: number;

  @Expose()
  originBytes: number;

  @Expose()
  connectionCount: number;
}
