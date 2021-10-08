import { Expose } from 'class-transformer';
import { IsIP, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  region: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Expose()
  @IsIP()
  loadbalancerIp: string;

  @IsUrl()
  @IsNotEmpty()
  @Expose()
  k8smanagerUrl: string;
}
