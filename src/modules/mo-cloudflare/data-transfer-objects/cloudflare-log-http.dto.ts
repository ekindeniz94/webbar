import { Expose } from 'class-transformer';

export class CloudflareLogHttpDto {
  @Expose()
  clientRequestHost: string;

  @Expose()
  clientRequestBytes: number;

  @Expose()
  cacheResponseBytes: number;

  @Expose()
  originResponseBytes: number;

  @Expose()
  requestCount: number;
}
