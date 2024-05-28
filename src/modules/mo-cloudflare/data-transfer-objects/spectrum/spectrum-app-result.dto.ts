import { Expose, Transform, Type } from 'class-transformer';
import { isNotEmpty } from 'class-validator';
import { SpectrumAppProxyProtocolEnum, SpectrumAppTLSEnum, SpectrumAppTrafficTypeEnum } from '../../enums/spectrum';
import { SpectrumAppResultDnsDto } from './spectrum-app-result-dns.dto';
import { SpectrumAppResultEdgeIpsDto } from './spectrum-app-result-edge-ips.dto';
import moment from 'moment/moment';
import { MoUtils, TransformToBoolean } from '@mo/js-utils';

export class SpectrumAppResultDto {
  @Expose()
  id: string;

  @Expose()
  protocol: string; //'tcp/49323',

  @Type(() => SpectrumAppResultDnsDto)
  @Expose()
  dns: SpectrumAppResultDnsDto;

  @Expose()
  origin_direct: string[];

  @TransformToBoolean(true)
  @Expose()
  ip_firewall: boolean; // true

  @Transform(({ value }) => value ?? SpectrumAppProxyProtocolEnum.OFF)
  @Expose()
  proxy_protocol: SpectrumAppProxyProtocolEnum; // off

  @Transform(({ value }) => value ?? SpectrumAppTLSEnum.FULL)
  @Expose()
  tls: SpectrumAppTLSEnum; // full

  @Transform(({ value }) => value ?? SpectrumAppTrafficTypeEnum.DIRECT)
  @Expose()
  traffic_type: SpectrumAppTrafficTypeEnum; // direct

  @Type(() => SpectrumAppResultEdgeIpsDto)
  @Expose()
  edge_ips: SpectrumAppResultEdgeIpsDto;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  created_on: Date; // '2022-08-08T16:10:43.298515Z';

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  modified_on: Date; // '2022-08-08T16:10:43.298515Z';
}
