import { Expose, Type } from 'class-transformer';

export class CloudflareStats {
  @Type(() => Number)
  @Expose()
  totalRequests: number;

  @Type(() => Number)
  @Expose()
  totalTrafficInBytes: number;
}
