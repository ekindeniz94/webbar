import { Expose } from 'class-transformer';

export class CloudflareLogHttpDto {
  @Expose()
  clientRequestHost: string;

  @Expose()
  clientRequestBytes: number;

  @Expose()
  cacheResponseBytes: number;

  @Expose()
  originResponseStatus: number;

  @Expose()
  edgeResponseBytes: number;

  @Expose()
  requestCount: number;
}
