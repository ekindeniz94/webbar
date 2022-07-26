import { Expose, Type } from 'class-transformer';
import { IsIP, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { CountryDto } from '../../../../mo-core';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;

  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  namespaceMaxCount: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  region: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsIP()
  @Expose()
  loadbalancerIp: string;

  @IsNotEmpty()
  @Expose()
  loadbalancerHost: string;

  @IsNotEmpty()
  @IsUrl()
  @Expose()
  k8smanagerUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  containerRegistryUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  host: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  cloudflareTcpSubDomain: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  cloudflareUdpSubDomain: string;
}
