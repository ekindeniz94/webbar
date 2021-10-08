import { Expose } from 'class-transformer';

export class ClusterDto {
  @Expose()
  region: string;

  @Expose()
  name: string;

  @Expose()
  loadbalancerIp: string;

  @Expose()
  k8smanagerUrl: string;
}