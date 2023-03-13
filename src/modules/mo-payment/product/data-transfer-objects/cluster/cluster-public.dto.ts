import { Expose, Transform } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';

export class ClusterPublicDto {
  @Expose()
  id: string;

  @Expose()
  region: string;

  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  host: string;

  @Expose()
  spectrumSubDomain: string;

  @Expose()
  loadbalancerHost: string;

  @Expose()
  description: string;

  @Expose()
  cloudflareProxied: boolean;

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

  get spectrumHost(): string {
    return `${this.spectrumSubDomain}-${this.name}`;
  }
}
