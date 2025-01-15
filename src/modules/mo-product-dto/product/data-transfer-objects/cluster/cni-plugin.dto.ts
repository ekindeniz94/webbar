import { Expose, Type } from 'class-transformer';
import { CniIpamDto } from './cni-ipam.dto';
import { CniPolicyDto } from './cni-policy.dto';
import { CniCapabilitiesDto } from './cni-capabilities.dto';
import { TransformToBoolean } from '@mogenius/js-utils';

export class CniPluginDto {
  @Expose()
  type: string;

  @Expose()
  log_level: string;

  @Expose()
  log_file_path: string;

  @Expose()
  datastore_type: string;

  @Expose()
  nodename: string;

  @Type(() => Number)
  @Expose()
  mtu: number;

  @Type(() => CniIpamDto)
  @Expose()
  ipam?: CniIpamDto;

  @Type(() => CniPolicyDto)
  @Expose()
  policy?: CniPolicyDto;

  @TransformToBoolean(false)
  @Expose()
  snat?: boolean;

  @Type(() => CniCapabilitiesDto)
  @Expose()
  capabilities?: CniCapabilitiesDto;
}
