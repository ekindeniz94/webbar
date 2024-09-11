import { Expose, Transform } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';

export class HelmEntryDto {
  @Expose()
  name: string;

  @Expose()
  url: string;

  // @Expose()
  // username: string;
  //
  // @Expose()
  // password: string;
  //
  // @Expose()
  // certFile: string;
  //
  // @Expose()
  // keyFile: string;
  //
  // @Expose()
  // caFile: string;

  @Transform(({ value, obj }) => value ?? obj?.insecure_skip_tls_verify)
  @TransformToBoolean()
  @Expose()
  insecureSkipTlsVerify: boolean;

  @Transform(({ value, obj }) => value ?? obj?.pass_credentials_all)
  @TransformToBoolean()
  @Expose()
  passCredentialsAll: boolean;
}
