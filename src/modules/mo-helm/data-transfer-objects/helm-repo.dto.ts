import { Expose } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';

export class HelmRepoDto {
  @Expose()
  name: string;

  @Expose()
  url: string;

  @Expose()
  username: string;

  @Expose()
  password: string;

  @Expose()
  certFile: string;

  @Expose()
  keyFile: string;

  @Expose()
  caFile: string;

  @TransformToBoolean(false)
  @Expose()
  insecure_skip_tls_verify: boolean;

  @TransformToBoolean(false)
  @Expose()
  pass_credentials_all: boolean;
}
