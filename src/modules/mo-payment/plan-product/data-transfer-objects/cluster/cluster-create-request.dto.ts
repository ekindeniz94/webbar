import { Expose } from 'class-transformer';
import { IsIP, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ClusterCreateRequestDto {
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
  @IsUrl()
  @Expose()
  k8smanagerUrl: string;

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
