import { Expose } from 'class-transformer';

export class CloudflareStats {
  @Expose()
  totalRequests: number;

  @Expose()
  totalTrafficInBytes: number;
}
