import { Expose, Type } from 'class-transformer';

export class ClusterStatusDto {
  @Expose()
  clustername: string;

  @Expose()
  location: string;

  @Expose()
  geoLocation: { lat: number; lng: number };

  @Expose()
  localTime: string;

  @Expose()
  cloudflareResponseTime: string;

  @Expose()
  azureResponseTime: string;
}
