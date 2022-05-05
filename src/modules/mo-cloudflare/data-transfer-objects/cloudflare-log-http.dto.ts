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
  originResponseBytes: number;

  @Expose()
  edgeResponseBytes: number;

  @Expose()
  requestCount: number;
}
